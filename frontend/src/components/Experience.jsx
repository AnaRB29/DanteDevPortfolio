import { experience } from "../data/mock";
import { Briefcase, Wrench, Code, GraduationCap } from "lucide-react";

const iconMap = {
  briefcase: Briefcase,
  wrench: Wrench,
  code: Code,
  graduation: GraduationCap
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#1A2F1A] dark-forest-bg text-[#FBF6E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#D97706]" />
            <span className="pixel-font text-[10px] text-[#D97706]">CHAPTER 04</span>
          </div>
          <h2 className="pixel-font text-[22px] md:text-[30px] text-[#FBF6E9] section-title-underline">
            Misiones completadas
          </h2>
          <p className="retro-font text-[20px] text-[#F5EFE0]/80 mt-4 max-w-xl">
            Una línea de tiempo de los mundos donde he puesto pezuñas hasta hoy.
          </p>
        </div>

        <div className="relative">
          {/* Pixel dashed line */}
          <div
            className="absolute left-6 md:left-1/2 top-2 bottom-2 w-[3px] -ml-[1.5px]"
            style={{
              backgroundImage: "linear-gradient(#D97706 50%, transparent 0)",
              backgroundSize: "3px 14px",
              backgroundRepeat: "repeat-y"
            }}
          />

          <div className="space-y-10">
            {experience.map((exp, i) => {
              const Icon = iconMap[exp.icon] || Briefcase;
              const isLeft = i % 2 === 0;
              return (
                <div key={exp.id} className="relative md:grid md:grid-cols-2 md:gap-10">
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 -ml-[18px] md:-ml-[18px] top-3 w-9 h-9 bg-[#D97706] border-[4px] border-[#FBF6E9] flex items-center justify-center z-10">
                    <Icon size={14} className="text-[#1A2F1A]" />
                  </div>

                  <div className={`pl-20 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <div className="bg-[#FBF6E9] text-[#1A2F1A] border-[4px] border-[#FBF6E9] p-5 pixel-shadow inline-block w-full">
                      <div className="retro-font text-[16px] text-[#6B4423] mb-1">{exp.period}</div>
                      <h3 className="pixel-font text-[12px] text-[#1A2F1A] leading-snug mb-2">{exp.role}</h3>
                      <div className="retro-font text-[18px] text-[#D97706] mb-3">@ {exp.company}</div>
                      <p className="body-font text-[14px] text-[#1F2937]/90 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
