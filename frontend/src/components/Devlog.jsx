import { devlogs } from "../data/mock";
import { Clock, ArrowRight } from "lucide-react";

const Devlog = () => {
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
              Devlog del mapache
            </h2>
            <p className="retro-font text-[20px] text-[#6B4423] mt-4 max-w-xl">
              Notas desde la madriguera: tutoriales, aprendizajes y deep-dives técnicos.
            </p>
          </div>
          <a href="#" className="pixel-font text-[11px] text-[#1A2F1A] hover:text-[#D97706] inline-flex items-center gap-2 transition-colors">
            Ver todos <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {devlogs.map((d) => (
            <article key={d.id} className="bg-[#FBF6E9] border-[4px] border-[#1A2F1A] pixel-shadow p-6 cursor-pointer group">
              <div className="flex items-center justify-between mb-4">
                <span className="pixel-font text-[9px] bg-[#2D4A2B] text-[#FBF6E9] px-2 py-1">{d.tag.toUpperCase()}</span>
                <span className="retro-font text-[16px] text-[#6B4423] inline-flex items-center gap-1">
                  <Clock size={12} /> {d.readTime}
                </span>
              </div>
              <h3 className="pixel-font text-[12px] text-[#1A2F1A] leading-[1.6] mb-3 group-hover:text-[#D97706] transition-colors">
                {d.title}
              </h3>
              <p className="body-font text-[14px] text-[#1F2937]/80 leading-relaxed mb-4 line-clamp-3">{d.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t-[3px] border-dashed border-[#1A2F1A]/25">
                <span className="retro-font text-[16px] text-[#6B4423]">{d.date}</span>
                <ArrowRight size={14} className="text-[#1A2F1A] group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devlog;
