import { companies } from "../data/mock";
import { Building2 } from "lucide-react";

const Companies = () => {
  return (
    <section id="companies" className="py-24 bg-[#F5EFE0] border-y-[4px] border-[#1A2F1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-[#D97706]" />
              <span className="pixel-font text-[10px] text-[#6B4423]">CHAPTER 05</span>
            </div>
            <h2 className="pixel-font text-[22px] md:text-[30px] text-[#1A2F1A] section-title-underline">
              Aliados del clan
            </h2>
            <p className="retro-font text-[20px] text-[#6B4423] mt-4 max-w-xl">
              Estudios y proyectos con los que he colaborado. Cada logo es una aventura compartida en el bosque.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#FBF6E9] border-[3px] border-[#1A2F1A] px-4 py-3">
            <Building2 size={16} className="text-[#D97706]" />
            <span className="pixel-font text-[10px] text-[#1A2F1A]">{companies.length} STUDIOS</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((c) => (
            <CompanyCard key={c.id} company={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CompanyCard = ({ company }) => (
  <article className="bg-[#FBF6E9] border-[4px] border-[#1A2F1A] pixel-shadow p-5 flex flex-col">
    <div className="flex items-start gap-4 mb-4">
      <div
        className="w-16 h-16 border-[3px] border-[#1A2F1A] flex items-center justify-center pixel-font text-[14px] text-[#FBF6E9] shrink-0"
        style={{ background: company.color }}
      >
        {company.initials}
      </div>
      <div className="min-w-0">
        <h3 className="pixel-font text-[12px] text-[#1A2F1A] leading-snug">{company.name}</h3>
        <div className="retro-font text-[16px] text-[#D97706] mt-1">{company.industry}</div>
        <div className="retro-font text-[14px] text-[#6B4423] mt-1">{company.period}</div>
      </div>
    </div>
    <p className="body-font text-[14px] text-[#1F2937]/85 leading-relaxed border-t-[3px] border-dashed border-[#1A2F1A]/25 pt-4">
      {company.description}
    </p>
  </article>
);

export default Companies;
