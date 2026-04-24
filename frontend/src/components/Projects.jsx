import { useState } from "react";
import { projects } from "../data/mock";
import { Gamepad2, Calendar, Tag, X, ExternalLink } from "lucide-react";

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
              <div className="w-2 h-2 bg-[#D54527]" />
              <span className="pixel-font text-[10px] text-[#B68669]">CHAPTER 03</span>
            </div>
            <h2 className="pixel-font text-[22px] md:text-[30px] text-[#271914] section-title-underline">
              Arcade de proyectos
            </h2>
            <p className="retro-font text-[20px] text-[#B68669] mt-4 max-w-xl">
              Insertar moneda para explorar. Títulos publicados en Steam, Google Play y más.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {engines.map((e) => (
              <button
                key={e}
                onClick={() => setFilter(e)}
                className={`retro-font text-[16px] px-3 py-2 border-[3px] border-[#271914] transition-transform duration-100 ${
                  filter === e ? "bg-[#D54527] text-[#FBF6E9] -translate-y-[2px]" : "bg-[#FBF6E9] text-[#271914] hover:-translate-y-[2px]"
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

const ProjectThumb = ({ project }) => (
  <div
    className="relative overflow-hidden border-b-[4px] border-[#271914] bg-[#271914]"
    style={{ height: 200 }}
  >
    {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    ) : (
      <div className="w-full h-full" style={{ background: project.color }} />
    )}
    {/* Scanlines overlay */}
    <div
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)"
      }}
    />
    <span className="absolute top-3 left-3 pixel-font text-[9px] bg-[#271914] text-[#FBF6E9] px-2 py-1 border-[2px] border-[#FBF6E9]">
      {project.engine.toUpperCase()}
    </span>
    {project.links && project.links.length > 0 && (
      <span className="absolute top-3 right-3 pixel-font text-[9px] bg-[#D54527] text-[#FBF6E9] px-2 py-1 border-[2px] border-[#FBF6E9]">
        {project.links.length} STORE{project.links.length > 1 ? "S" : ""}
      </span>
    )}
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <article
    onClick={onClick}
    className="bg-[#FBF6E9] border-[4px] border-[#271914] pixel-shadow cursor-pointer flex flex-col"
  >
    <ProjectThumb project={project} />
    <div className="p-5 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-2">
        <Calendar size={12} className="text-[#B68669]" />
        <span className="retro-font text-[16px] text-[#B68669]">{project.year}</span>
        <span className="text-[#B68669]">•</span>
        <span className="retro-font text-[16px] text-[#B68669]">{project.genre}</span>
      </div>
      <h3 className="pixel-font text-[13px] text-[#271914] leading-snug mb-3">{project.title}</h3>
      <p className="body-font text-[14px] text-[#1F2937]/80 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 3).map((t) => (
          <span key={t} className="tag-pill">{t}</span>
        ))}
      </div>
    </div>
  </article>
);

const ProjectModal = ({ project, onClose }) => (
  <div
    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#271914]/85"
    onClick={onClose}
  >
    <div
      className="max-w-2xl w-full bg-[#FBF6E9] border-[4px] border-[#271914] pixel-shadow max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <ProjectThumb project={project} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="retro-font text-[16px] text-[#B68669] mb-1">{project.year} • {project.genre}</div>
            <h3 className="pixel-font text-[16px] text-[#271914]">{project.title}</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 bg-[#271914] text-[#FBF6E9] flex items-center justify-center hover:bg-[#D54527]" aria-label="Cerrar">
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
            <div className="pixel-font text-[9px] text-[#B68669] mb-2">STACK</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
            </div>
          </div>
          {project.links && project.links.length > 0 && (
            <div>
              <div className="pixel-font text-[9px] text-[#B68669] mb-2">DISPONIBLE EN</div>
              <div className="flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.store}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pixel-button inline-flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    {l.store}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const InfoBlock = ({ label, value, icon: Icon }) => (
  <div className="border-[3px] border-[#271914] p-3">
    <div className="flex items-center gap-2 mb-1">
      <Icon size={12} className="text-[#D54527]" />
      <span className="pixel-font text-[9px] text-[#B68669]">{label}</span>
    </div>
    <div className="retro-font text-[18px] text-[#271914]">{value}</div>
  </div>
);

export default Projects;
