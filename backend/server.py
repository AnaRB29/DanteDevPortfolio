from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import smtplib
from email.mime.text import MIMEText
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Alfonso Martín Portfolio API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(default="", max_length=150)
    message: str = Field(..., min_length=1, max_length=2000)


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str = ""
    message: str
    received_at: datetime = Field(default_factory=datetime.utcnow)


class ContactResponse(BaseModel):
    id: str
    received_at: datetime
    message: str = "ok"


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Alfonso Martín Portfolio API — online"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    status_obj = StatusCheck(**payload.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    docs = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**d) for d in docs]

#/*
#@api_router.post("/contact", response_model=ContactResponse)
#async def create_contact_message(payload: ContactMessageCreate):
#    try:
#        msg = ContactMessage(
#            name=payload.name.strip(),
#            email=str(payload.email).strip().lower(),
#            subject=(payload.subject or "").strip(),
#            message=payload.message.strip(),
#        )
#        await db.contact_messages.insert_one(msg.dict())
#        logger.info("New contact message stored id=%s from=%s", msg.id, msg.email)
#        return ContactResponse(id=msg.id, received_at=msg.received_at)
#    except HTTPException:
#        raise
#    except Exception as e:
#        logger.exception("Failed to store contact message: %s", e)
#        raise HTTPException(status_code=500, detail="Could not store message")
#*/

@api_router.post("/contact")
async def create_contact_message(
    payload: ContactMessageCreate, 
    background_tasks: BackgroundTasks
):
    try:
        msg = ContactMessage(
            name=payload.name.strip(),
            email=str(payload.email).strip().lower(),
            subject=(payload.subject or "Nuevo Contacto").strip(),
            message=payload.message.strip(),
        )
        
        # --- Guardado en Base de Datos (Comentado) ---
        # await db.contact_messages.insert_one(msg.dict())
        # logger.info("New contact message stored id=%s from=%s", msg.id, msg.email)
        # ---------------------------------------------
        
        def send_email(contact_info):
            smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
            smtp_port = int(os.getenv("SMTP_PORT", 587))
            sender_email = os.getenv("SMTP_EMAIL", "tu_correo_de_envio@example.com")
            sender_password = os.getenv("SMTP_PASSWORD", "tu_contraseña_o_app_password")
            
            receiver_email = "correo@example.com"
            
            body = f"""Has recibido un nuevo mensaje de contacto desde tu portafolio:
            
Nombre: {contact_info.name}
Email: {contact_info.email}
Asunto: {contact_info.subject}

Mensaje:
{contact_info.message}
"""
            mime_msg = MIMEText(body, 'plain', 'utf-8')
            mime_msg['Subject'] = f"Portafolio - {contact_info.subject or 'Nuevo Mensaje'}"
            mime_msg['From'] = sender_email
            mime_msg['To'] = receiver_email
            
            try:
                server = smtplib.SMTP(smtp_server, smtp_port)
                server.starttls()
                server.login(sender_email, sender_password)
                server.sendmail(sender_email, receiver_email, mime_msg.as_string())
                server.quit()
                logger.info("Email notification sent successfully to %s", receiver_email)
            except Exception as email_err:
                logger.error("Failed to send email notification: %s", email_err)

        # Ejecutar el envío de correo en segundo plano
        background_tasks.add_task(send_email, msg)

        return {"message": "El mensaje ha sido enviado correctamente."}
    except HTTPException:
        raise
    except Exception as e:
        logger.exception("Failed to process contact message: %s", e)
        raise HTTPException(status_code=500, detail="Could not process message")

@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages(limit: int = 100):
    limit = max(1, min(limit, 500))
    cursor = db.contact_messages.find().sort("received_at", -1).limit(limit)
    docs = await cursor.to_list(length=limit)
    return [ContactMessage(**d) for d in docs]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
