import { useState } from "react";
import { projects } from "../data/mock";
import { Gamepad2, Calendar, Tag, X } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(null);
  const engines = ["Todos", ...new Set(projects.map((p) => p.engine))];
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.engine === filter);

  return (
    <section id="projects" className="py-24 forest-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D97706]" />
              <span className="pixel-font text-[10px] text-[#6B4423]">CHAPTER 03</span>
            </div>
            <h2 className="pixel-font text-[22px] md:text-[30px] text-[#1A2F1A] section-title-underline">
              Arcade de proyectos
            </h2>
            <p className="retro-font text-[20px] text-[#6B4423] mt-4 max-w-xl">
              Insertar moneda para explorar. Desde prototipos de game jam hasta herramientas internas de estudio.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {engines.map((e) => (
              <button
                key={e}
                onClick={() => setFilter(e)}
                className={`retro-font text-[16px] px-3 py-2 border-[3px] border-[#1A2F1A] transition-transform duration-100 ${
                  filter === e ? "bg-[#D97706] text-[#FBF6E9] -translate-y-[2px]" : "bg-[#FBF6E9] text-[#1A2F1A] hover:-translate-y-[2px]"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

const ProjectThumb = ({ color, label }) => (
  <div
    className="relative overflow-hidden border-b-[4px] border-[#1A2F1A]"
    style={{ background: color, height: 180 }}
  >
    {/* Pixel grid overlay */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.25) 1px, transparent 1px)",
        backgroundSize: "12px 12px"
      }}
    />
    {/* Pixel art silhouette */}
    <svg viewBox="0 0 16 12" className="pixelated absolute inset-0 w-full h-full opacity-90" preserveAspectRatio="xMidYMid meet">
      <rect x="4" y="3" width="8" height="1" fill="#F5EFE0" />
      <rect x="3" y="4" width="10" height="3" fill="#F5EFE0" />
      <rect x="4" y="7" width="8" height="1" fill="#F5EFE0" />
      <rect x="5" y="4" width="1" height="1" fill="#1A1A1A" />
      <rect x="10" y="4" width="1" height="1" fill="#1A1A1A" />
      <rect x="7" y="5" width="2" height="1" fill="#1A1A1A" />
    </svg>
    <span className="absolute top-3 left-3 pixel-font text-[9px] bg-[#1A2F1A] text-[#FBF6E9] px-2 py-1">
      {label}
    </span>
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <article
    onClick={onClick}
    className="bg-[#FBF6E9] border-[4px] border-[#1A2F1A] pixel-shadow cursor-pointer"
  >
    <ProjectThumb color={project.color} label={project.engine.toUpperCase()} />
    <div className="p-5">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={12} className="text-[#6B4423]" />
        <span className="retro-font text-[16px] text-[#6B4423]">{project.year}</span>
        <span className="text-[#6B4423]">•</span>
        <span className="retro-font text-[16px] text-[#6B4423]">{project.genre}</span>
      </div>
      <h3 className="pixel-font text-[13px] text-[#1A2F1A] leading-snug mb-3">{project.title}</h3>
      <p className="body-font text-[14px] text-[#1F2937]/80 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((t) => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>
    </div>
  </article>
);

const ProjectModal = ({ project, onClose }) => (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#1A2F1A]/80"
    onClick={onClose}
  >
    <div
      className="max-w-2xl w-full bg-[#FBF6E9] border-[4px] border-[#1A2F1A] pixel-shadow max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <ProjectThumb color={project.color} label={project.engine.toUpperCase()} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="retro-font text-[16px] text-[#6B4423] mb-1">{project.year} • {project.genre}</div>
            <h3 className="pixel-font text-[16px] text-[#1A2F1A]">{project.title}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-[#1A2F1A] text-[#FBF6E9] flex items-center justify-center hover:bg-[#D97706]" aria-label="Cerrar">
            <X size={18} />
          </button>
        </div>
        <div className="space-y-4">
          <p className="body-font text-[15px] text-[#1F2937] leading-relaxed">{project.description}</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <InfoBlock label="ENGINE" value={project.engine} icon={Gamepad2} />
            <InfoBlock label="ROLE" value={project.role} icon={Tag} />
          </div>
          <div>
            <div className="pixel-font text-[9px] text-[#6B4423] mb-2">STACK</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InfoBlock = ({ label, value, icon: Icon }) => (
  <div className="border-[3px] border-[#1A2F1A] p-3">
    <div className="flex items-center gap-2 mb-1">
      <Icon size={12} className="text-[#D97706]" />
      <span className="pixel-font text-[9px] text-[#6B4423]">{label}</span>
    </div>
    <div className="retro-font text-[18px] text-[#1A2F1A]">{value}</div>
  </div>
);

export default Projects;
