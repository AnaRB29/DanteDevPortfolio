import { useState } from "react";
import { skills } from "../data/mock";
import { Code2, Cpu, Wrench, Sparkles } from "lucide-react";

const categoryIcons = {
  "Lenguajes": Code2,
  "Motores": Cpu,
  "Herramientas": Wrench,
  "Disciplinas": Sparkles
};

const Skills = () => {
  const categories = [...new Set(skills.map((s) => s.category))];
  const [active, setActive] = useState(categories[0]);
  const filtered = skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-24 bg-[#ECD2D2] border-y-[4px] border-[#271914]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D54527]" />
              <span className="pixel-font text-[10px] text-[#B68669]">CHAPTER 02</span>
            </div>
            <h2 className="pixel-font text-[22px] md:text-[30px] text-[#271914] section-title-underline">
              Inventario
            </h2>
            <p className="retro-font text-[20px] text-[#B68669] mt-4 max-w-xl">
              Mis objetos equipados. Cada uno mejorado a base de proyectos reales y muchas horas de prueba y error.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat] || Sparkles;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`pixel-font text-[10px] px-4 py-3 border-[3px] border-[#271914] inline-flex items-center gap-2 transition-transform duration-100 ${
                    active === cat
                      ? "bg-[#724830] text-[#FBF6E9] -translate-y-[2px]"
                      : "bg-[#FBF6E9] text-[#271914] hover:-translate-y-[2px]"
                  }`}
                >
                  <Icon size={14} />
                  {cat.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <SkillBar key={s.name} skill={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ skill }) => {
  // Segmented pixel bar (10 cells)
  const cells = Array.from({ length: 10 }, (_, i) => i < Math.round(skill.level / 10));
  return (
    <div className="bg-[#FBF6E9] border-[3px] border-[#271914] p-5 pixel-shadow">
      <div className="flex justify-between items-baseline mb-3">
        <span className="pixel-font text-[11px] text-[#271914]">{skill.name}</span>
        <span className="retro-font text-[18px] text-[#D54527]">{skill.level}/100</span>
      </div>
      <div className="flex gap-1">
        {cells.map((filled, i) => (
          <div
            key={i}
            className="flex-1 h-5 border-[2px] border-[#271914]"
            style={{
              background: filled
                ? i < 5
                  ? "#724830"
                  : i < 8
                  ? "#B68669"
                  : "#D54527"
                : "#ECD2D2"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
