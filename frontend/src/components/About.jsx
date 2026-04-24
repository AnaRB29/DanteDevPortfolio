import { profile } from "../data/mock";
import { Sparkles, MapPin, Mail, Clock } from "lucide-react";
import { useLang, pick } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

const About = () => {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="about" className="forest-bg py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D54527]" />
              <span className="pixel-font text-[10px] text-[#B68669]">{t.about.chapter}</span>
            </div>
            <h2 className="pixel-font text-[22px] md:text-[30px] text-[#271914] section-title-underline">
              {t.about.title}
            </h2>
            <div className="mt-8 bg-[#FBF6E9] pixel-shadow border-[4px] border-[#271914] p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#D54527]" />
                  <span className="retro-font text-[18px] text-[#271914]">{pick(profile.location, lang)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#D54527]" />
                  <span className="retro-font text-[18px] text-[#271914]">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-[#D54527]" />
                  <span className="retro-font text-[18px] text-[#271914]">{pick(profile.availability, lang)}</span>
                </div>
              </div>
              <div className="mt-5 pt-5 border-t-[3px] border-dashed border-[#271914]/30">
                <div className="pixel-font text-[9px] text-[#B68669] mb-3">{t.about.stats}</div>
                <div className="grid grid-cols-2 gap-3">
                  {profile.stats.map((s, i) => (
                    <div key={i} className="bg-[#724830] text-[#FBF6E9] p-3 border-[3px] border-[#271914]">
                      <div className="pixel-font text-[16px]">{s.value}</div>
                      <div className="retro-font text-[14px] opacity-90 leading-tight mt-1">{pick(s.label, lang)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#FBF6E9] pixel-shadow border-[4px] border-[#271914] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={18} className="text-[#D54527]" />
                <span className="pixel-font text-[10px] text-[#724830]">{t.about.questLog}</span>
              </div>
              <p className="body-font text-[17px] md:text-[18px] text-[#1F2937] leading-[1.85]">
                {pick(profile.bio, lang)}
              </p>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <FeatureCard title={t.about.features.gameplay.title} desc={t.about.features.gameplay.desc} color="#D54527" />
                <FeatureCard title={t.about.features.tools.title} desc={t.about.features.tools.desc} color="#724830" />
                <FeatureCard title={t.about.features.pixel.title} desc={t.about.features.pixel.desc} color="#B68669" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc, color }) => (
  <div className="border-[3px] border-[#271914] p-4 bg-[#FBF6E9] transition-transform duration-150 hover:-translate-y-1">
    <div className="w-8 h-8 mb-3" style={{ background: color, border: "3px solid #271914" }} />
    <div className="pixel-font text-[11px] text-[#271914] mb-2">{title}</div>
    <div className="retro-font text-[16px] text-[#1F2937] leading-snug">{desc}</div>
  </div>
);

export default About;
