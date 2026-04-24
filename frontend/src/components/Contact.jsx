import { useState } from "react";
import axios from "axios";
import { profile } from "../data/mock";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Gamepad2, Globe } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useLang, pick } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
  "Itch.io": Gamepad2,
  Email: Mail,
  Portfolio: Globe
};

const Contact = () => {
  const { toast } = useToast();
  const { lang } = useLang();
  const t = translations[lang];
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({
        title: t.contact.toast.missing.title,
        description: t.contact.toast.missing.desc,
        variant: "destructive"
      });
      return;
    }
    setSending(true);
    try {
      await axios.post(`${API}/contact`, form);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast({
        title: t.contact.toast.success.title,
        description: t.contact.toast.success.desc
      });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast({
        title: t.contact.toast.error.title,
        description: typeof detail === "string" ? detail : t.contact.toast.error.desc,
        variant: "destructive"
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#271914] dark-forest-bg text-[#FBF6E9]">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#D54527]" />
            <span className="pixel-font text-[10px] text-[#D54527]">{t.contact.chapter}</span>
          </div>
          <h2 className="pixel-font text-[22px] md:text-[30px] text-[#FBF6E9] section-title-underline">
            {t.contact.title}
          </h2>
          <p className="retro-font text-[20px] text-[#F5EFE0]/80 mt-4 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <InfoCard icon={Mail} label={t.contact.email} value={profile.email} />
            <InfoCard icon={MapPin} label={t.contact.location} value={pick(profile.location, lang)} />
            <div className="bg-[#FBF6E9] text-[#271914] border-[4px] border-[#FBF6E9] p-5 pixel-shadow">
              <div className="pixel-font text-[10px] text-[#B68669] mb-3">{t.contact.social}</div>
              <div className="grid grid-cols-2 gap-3">
                {profile.socials.map((s) => {
                  const Icon = socialIcons[s.name] || Github;
                  return (
                    <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                      className="flex items-center gap-3 border-[3px] border-[#271914] p-3 hover:bg-[#D54527] hover:text-[#FBF6E9] transition-colors duration-150">
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

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-[#FBF6E9] text-[#271914] border-[4px] border-[#FBF6E9] p-6 md:p-8 pixel-shadow space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label={t.contact.form.name} name="name" value={form.name} onChange={handleChange} placeholder={t.contact.form.namePh} />
              <Field label={t.contact.form.email} name="email" type="email" value={form.email} onChange={handleChange} placeholder={t.contact.form.emailPh} />
            </div>
            <Field label={t.contact.form.subject} name="subject" value={form.subject} onChange={handleChange} placeholder={t.contact.form.subjectPh} />
            <div>
              <label className="pixel-font text-[10px] text-[#B68669] block mb-2">{t.contact.form.message.toUpperCase()}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder={t.contact.form.messagePh}
                className="w-full border-[3px] border-[#271914] bg-[#ECD2D2] px-4 py-3 retro-font text-[18px] text-[#271914] focus:outline-none focus:bg-[#FBF6E9] focus:ring-4 focus:ring-[#D54527]/40"
              />
            </div>
            <button type="submit" disabled={sending} className="pixel-button inline-flex items-center gap-2 disabled:opacity-60">
              <Send size={14} />
              {sending ? t.contact.form.sending : t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, value, onChange, placeholder, type = "text" }) => (
  <div>
    <label className="pixel-font text-[10px] text-[#B68669] block mb-2">{label.toUpperCase()}</label>
    <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
      className="w-full border-[3px] border-[#271914] bg-[#ECD2D2] px-4 py-3 retro-font text-[18px] text-[#271914] focus:outline-none focus:bg-[#FBF6E9] focus:ring-4 focus:ring-[#D54527]/40" />
  </div>
);

const InfoCard = ({ icon: Icon, label, value }) => (
  <div className="bg-[#FBF6E9] text-[#271914] border-[4px] border-[#FBF6E9] p-5 pixel-shadow flex items-center gap-4">
    <div className="w-12 h-12 bg-[#D54527] border-[3px] border-[#271914] flex items-center justify-center text-[#271914]">
      <Icon size={18} />
    </div>
    <div>
      <div className="pixel-font text-[9px] text-[#B68669]">{label}</div>
      <div className="retro-font text-[18px] text-[#271914] mt-1">{value}</div>
    </div>
  </div>
);

export default Contact;
