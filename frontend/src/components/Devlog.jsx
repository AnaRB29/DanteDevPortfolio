import { events } from "../data/mock";
import { MapPin, Calendar, Trophy, Mic, Book, Award, Users } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  mic: Mic,
  book: Book,
  award: Award,
  users: Users
};

const tagColors = {
  "Game Jam": "#D97706",
  "Conferencia": "#2D4A2B",
  "Workshop": "#6B4423",
  "Expo": "#3F5A3A",
  "Comunidad": "#8B5A2B"
};

const Events = () => {
  return (
    <section id="devlog" className="py-24 forest-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D97706]" />
              <span className="pixel-font text-[10px] text-[#6B4423]">CHAPTER 06</span>
            </div>
            <h2 className="pixel-font text-[22px] md:text-[30px] text-[#1A2F1A] section-title-underline">
              Eventos &amp; game jams
            </h2>
            <p className="retro-font text-[20px] text-[#6B4423] mt-4 max-w-xl">
              Salir de la madriguera: conferencias, jams, workshops y meetups donde he participado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => {
            const Icon = iconMap[ev.icon] || Trophy;
            const tagColor = tagColors[ev.tag] || "#2D4A2B";
            return (
              <article
                key={ev.id}
                className="bg-[#FBF6E9] border-[4px] border-[#1A2F1A] pixel-shadow p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 border-[3px] border-[#1A2F1A] flex items-center justify-center text-[#FBF6E9]"
                    style={{ background: tagColor }}
                  >
                    <Icon size={18} />
                  </div>
                  <span
                    className="pixel-font text-[9px] px-2 py-1 border-[3px] border-[#1A2F1A]"
                    style={{ background: tagColor, color: "#FBF6E9" }}
                  >
                    {ev.tag.toUpperCase()}
                  </span>
                </div>
                <h3 className="pixel-font text-[12px] text-[#1A2F1A] leading-[1.6] mb-2">{ev.title}</h3>
                <div className="retro-font text-[16px] text-[#D97706] mb-4">{ev.role}</div>
                <p className="body-font text-[14px] text-[#1F2937]/85 leading-relaxed mb-4">{ev.description}</p>
                <div className="mt-auto pt-4 border-t-[3px] border-dashed border-[#1A2F1A]/25 flex items-center justify-between retro-font text-[15px] text-[#6B4423]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} /> {ev.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {ev.location}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
