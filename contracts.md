# API Contracts — Alfonso Martín Portfolio

## Scope
Only the contact form is backed by the API. All other sections (profile, skills, projects, experience, companies, events) remain static via `/app/frontend/src/data/mock.js` to keep the portfolio fast and editable directly in code.

## Endpoint

### POST `/api/contact`
Submit a contact message from the portfolio form.

Request body (JSON):
```json
{
  "name": "string (required, 1-100)",
  "email": "string (required, valid email)",
  "subject": "string (optional, <=150)",
  "message": "string (required, 1-2000)"
}
```

Response 200:
```json
{
  "id": "uuid",
  "received_at": "ISO-8601 datetime",
  "message": "ok"
}
```

Errors:
- 422: validation error (FastAPI/Pydantic default)
- 500: server error

### GET `/api/contact` (admin helper)
Returns the list of messages (most recent first). Not linked from UI, useful for quick verification.

## Data model — Mongo collection `contact_messages`
```
{
  id: uuid (str),
  name: str,
  email: str,
  subject: str | "",
  message: str,
  received_at: datetime (utc)
}
```

## Frontend integration
- Replace `localStorage` logic in `src/components/Contact.jsx` with `axios.post(`${API}/contact`, form)`.
- Use `REACT_APP_BACKEND_URL` + `/api` prefix.
- Keep existing toast feedback (success / error).
- On network/validation error, show destructive toast.

## Mock data (stays as mock)
`profile`, `skills`, `projects`, `experience`, `companies`, `events` — all static in `mock.js`.
