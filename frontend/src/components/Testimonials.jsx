import { useState } from "react";
import { testimonials } from "../data/mock";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((i + 1) % testimonials.length);
  const prev = () => setI((i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-[#F5EFE0] border-y-[4px] border-[#1A2F1A]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#D97706]" />
            <span className="pixel-font text-[10px] text-[#6B4423]">CHAPTER 05</span>
            <div className="w-2 h-2 bg-[#D97706]" />
          </div>
          <h2 className="pixel-font text-[22px] md:text-[30px] text-[#1A2F1A] inline-block">
            Reviews del clan
          </h2>
        </div>

        <div className="bg-[#FBF6E9] border-[4px] border-[#1A2F1A] pixel-shadow p-8 md:p-12 relative">
          <Quote size={36} className="text-[#D97706] mb-4" />
          <p className="body-font text-[17px] md:text-[19px] text-[#1F2937] leading-[1.8] mb-8 min-h-[120px]">
            “{t.text}”
          </p>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 border-[3px] border-[#1A2F1A] flex items-center justify-center pixel-font text-[12px] text-[#FBF6E9]"
                style={{ background: t.avatarBg }}
              >
                {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="pixel-font text-[11px] text-[#1A2F1A]">{t.name}</div>
                <div className="retro-font text-[16px] text-[#6B4423] mt-1">{t.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={prev} className="w-10 h-10 bg-[#2D4A2B] text-[#FBF6E9] border-[3px] border-[#1A2F1A] flex items-center justify-center hover:bg-[#D97706]" aria-label="Anterior">
                <ChevronLeft size={18} />
              </button>
              <div className="retro-font text-[18px] text-[#1A2F1A] px-2">
                {i + 1} / {testimonials.length}
              </div>
              <button onClick={next} className="w-10 h-10 bg-[#2D4A2B] text-[#FBF6E9] border-[3px] border-[#1A2F1A] flex items-center justify-center hover:bg-[#D97706]" aria-label="Siguiente">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
