import { useState } from "react";
import { profile } from "../data/mock";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Gamepad2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  "Itch.io": Gamepad2
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: "Faltan campos",
        description: "Por favor completa nombre, email y mensaje.",
        variant: "destructive"
      });
      return;
    }
    setSending(true);
    // Mocked submission (saved in localStorage for now)
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem("raccoon_messages") || "[]");
      stored.push({ ...form, date: new Date().toISOString() });
      localStorage.setItem("raccoon_messages", JSON.stringify(stored));
      setSending(false);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({
        title: "¡Mensaje enviado! 🌲",
        description: "El mapache llevará tu mensaje. Te responderé pronto."
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#1A2F1A] dark-forest-bg text-[#FBF6E9]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#D97706]" />
            <span className="pixel-font text-[10px] text-[#D97706]">CHAPTER 07</span>
          </div>
          <h2 className="pixel-font text-[22px] md:text-[30px] text-[#FBF6E9] section-title-underline">
            ¿Empezamos una partida?
          </h2>
          <p className="retro-font text-[20px] text-[#F5EFE0]/80 mt-4 max-w-2xl">
            ¿Tienes un proyecto, una herramienta o un prototipo que quieres darle forma? Déjame un mensaje y coordinamos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <InfoCard icon={Mail} label="EMAIL" value={profile.email} />
            <InfoCard icon={MapPin} label="UBICACIÓN" value={profile.location} />
            <div className="bg-[#FBF6E9] text-[#1A2F1A] border-[4px] border-[#FBF6E9] p-5 pixel-shadow">
              <div className="pixel-font text-[10px] text-[#6B4423] mb-3">SOCIAL NETWORKS</div>
              <div className="grid grid-cols-2 gap-3">
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.name] || Github;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 border-[3px] border-[#1A2F1A] p-3 hover:bg-[#D97706] hover:text-[#FBF6E9] transition-colors duration-150"
                    >
                      <Icon size={16} />
                      <div>
                        <div className="pixel-font text-[9px]">{s.name.toUpperCase()}</div>
                        <div className="retro-font text-[14px] opacity-80">{s.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-[#FBF6E9] text-[#1A2F1A] border-[4px] border-[#FBF6E9] p-6 md:p-8 pixel-shadow space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nombre" name="name" value={form.name} onChange={handleChange} placeholder="Tu nombre" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" />
            </div>
            <Field label="Asunto" name="subject" value={form.subject} onChange={handleChange} placeholder="¿Sobre qué es?" />
            <div>
              <label className="pixel-font text-[10px] text-[#6B4423] block mb-2">MENSAJE</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Cuenta tu idea, el stack, plazos..."
                className="w-full border-[3px] border-[#1A2F1A] bg-[#F5EFE0] px-4 py-3 retro-font text-[18px] text-[#1A2F1A] focus:outline-none focus:bg-[#FBF6E9] focus:ring-4 focus:ring-[#D97706]/40"
              />
            </div>
            <button type="submit" disabled={sending} className="pixel-button inline-flex items-center gap-2 disabled:opacity-60">
              <Send size={14} />
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label className="pixel-font text-[10px] text-[#6B4423] block mb-2">{label.toUpperCase()}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border-[3px] border-[#1A2F1A] bg-[#F5EFE0] px-4 py-3 retro-font text-[18px] text-[#1A2F1A] focus:outline-none focus:bg-[#FBF6E9] focus:ring-4 focus:ring-[#D97706]/40"
    />
  </div>
);

const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="bg-[#FBF6E9] text-[#1A2F1A] border-[4px] border-[#FBF6E9] p-5 pixel-shadow flex items-center gap-4">
    <div className="w-12 h-12 bg-[#D97706] border-[3px] border-[#1A2F1A] flex items-center justify-center text-[#1A2F1A]">
      <Icon size={18} />
    </div>
    <div>
      <div className="pixel-font text-[9px] text-[#6B4423]">{label}</div>
      <div className="retro-font text-[18px] text-[#1A2F1A] mt-1">{value}</div>
    </div>
  </div>
);

export default Contact;
