import { Compass, Sun, Droplets, Wind, Shield } from "lucide-react";
const ArchitecturalPhilosophy = ({ lang }) => {
  const t = {
    ru: {
      tag: "\u0410\u0420\u0425\u0418\u0422\u0415\u041A\u0422\u0423\u0420\u041D\u0410\u042F \u0424\u0418\u041B\u041E\u0421\u041E\u0424\u0418\u042F",
      title:
        "\u0421\u0418\u041D\u0422\u0415\u0417 \u0411\u0418\u041E\u0424\u0418\u041B\u042C\u041D\u041E\u0413\u041E \u0414\u0418\u0417\u0410\u0419\u041D\u0410 \u0418 \u041C\u041E\u041D\u0423\u041C\u0415\u041D\u0422\u0410\u041B\u042C\u041D\u041E\u0419 \u0422\u0420\u041E\u041F\u0418\u0427\u0415\u0421\u041A\u041E\u0419 \u042D\u0421\u0422\u0415\u0422\u0418\u041A\u0418",
      lead: "\u041A\u0430\u0436\u0434\u0430\u044F \u0432\u0438\u043B\u043B\u0430 \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043A\u0430\u043A \u0437\u0430\u043C\u043A\u043D\u0443\u0442\u0430\u044F \u044D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u0438: \u0447\u0438\u0441\u0442\u044B\u0435 \u0433\u0435\u043E\u043C\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0431\u044A\u0435\u043C\u044B \u0438\u0437 \u0432\u0443\u043B\u043A\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0430\u043D\u0434\u0435\u0437\u0438\u0442\u0430, \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0438\u043A\u0430 \u0438 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u043E\u0441\u0442\u0435\u043A\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u043F\u043E\u043B\u0430 \u0434\u043E \u043F\u043E\u0442\u043E\u043B\u043A\u0430.",
      pillars: [
        {
          icon: Droplets,
          title:
            "\u0418\u043D\u0444\u0438\u043D\u0438\u0442\u0438-\u0431\u0430\u0441\u0441\u0435\u0439\u043D\u044B \u0438 \u0432\u043E\u0434\u043D\u044B\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u0430",
          desc: "\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0431\u0430\u0441\u0441\u0435\u0439\u043D \u0441 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u043C \u0431\u0430\u043B\u0438\u0439\u0441\u043A\u0438\u043C \u043A\u0430\u043C\u043D\u0435\u043C Sukabumi, \u0441\u043E\u0437\u0434\u0430\u044E\u0449\u0438\u0439 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0445\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u0435 \u043C\u0438\u043A\u0440\u043E\u043A\u043B\u0438\u043C\u0430\u0442\u0430.",
        },
        {
          icon: Wind,
          title:
            "\u041F\u0430\u0441\u0441\u0438\u0432\u043D\u0430\u044F \u0441\u043A\u0432\u043E\u0437\u043D\u0430\u044F \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0446\u0438\u044F",
          desc: "\u0410\u044D\u0440\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043E\u0440\u0438\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043A\u0440\u043E\u0432\u043B\u0438 \u0438 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u0445 \u043B\u0430\u043C\u0435\u043B\u0435\u0439 \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u044D\u043D\u0435\u0440\u0433\u043E\u043F\u043E\u0442\u0440\u0435\u0431\u043B\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C \u043D\u0430 42%.",
        },
        {
          icon: Sun,
          title:
            "\u0412\u044B\u0441\u043E\u0442\u0430 \u043F\u043E\u0442\u043E\u043B\u043A\u043E\u0432 6.5 \u043C\u0435\u0442\u0440\u043E\u0432",
          desc: "\u0414\u0432\u0443\u0441\u0432\u0435\u0442\u043D\u044B\u0435 \u0436\u0438\u043B\u044B\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u043D\u0435\u043F\u0440\u0435\u0440\u044B\u0432\u043D\u044B\u043C\u0438 \u043B\u0438\u043D\u0438\u044F\u043C\u0438 \u0441\u0432\u0435\u0442\u0430 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0436\u0430\u043B\u044E\u0437\u0438 \u0434\u043B\u044F \u043C\u044F\u0433\u043A\u043E\u0433\u043E \u0440\u0430\u0441\u0441\u0435\u044F\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u043B\u043D\u0446\u0430.",
        },
        {
          icon: Shield,
          title:
            "\u041F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u044B",
          desc: "\u0428\u0443\u043C\u043E\u0438\u0437\u043E\u043B\u0438\u0440\u0443\u044E\u0449\u0438\u0435 \u0441\u0442\u0435\u043A\u043B\u043E\u043F\u0430\u043A\u0435\u0442\u044B, \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043E\u0434\u044B \u0434\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u043F\u0438\u0442\u044C\u0435\u0432\u043E\u0439 \u0438 \u0443\u043C\u043D\u044B\u0439 \u0434\u043E\u043C \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043B\u0430\u0441\u0441\u0430.",
        },
      ],
    },
    en: {
      tag: "ARCHITECTURAL PHILOSOPHY",
      title:
        "SYNTHESIS OF BIOPHILIC PRECISION & TROPICAL MONOLITHIC MINIMALISM",
      lead: "Every residence is sculpted as a private sanctuary: raw volcanic andesite stone, century-grade reclaimed teak, and floor-to-ceiling glass envelopes dissolving the interior into private jungle gardens.",
      pillars: [
        {
          icon: Droplets,
          title: "Reflection Infinity Pools",
          desc: "Clad in genuine Balinese Sukabumi emerald stone, naturally cooling the immediate microclimate and enhancing dusk reflections.",
        },
        {
          icon: Wind,
          title: "Passive Cross-Flow Aerodynamics",
          desc: "Oriented with seasonal trade winds and slatted timber louvers to reduce HVAC mechanical dependence by up to 42%.",
        },
        {
          icon: Sun,
          title: "6.5m Double-Height Envelopes",
          desc: "Grand gallery proportions framing tropical garden courtyards, accented by bespoke architectural pendant luminaires.",
        },
        {
          icon: Shield,
          title: "Institutional Grade Engineering",
          desc: "Acoustic laminated double-glazing, multi-stage water filtration to potable standards, and integrated home automation.",
        },
      ],
    },
  }[lang];
  return (
    <section
      id="philosophy"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#0e1014] border-t border-white/10"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c5a880] flex items-center gap-2 mb-3">
              <Compass className="w-3.5 h-3.5" />
              {t.tag}
            </span>
            <h2 className="font-sans-lux text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
              {t.title}
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/70 font-light leading-relaxed font-sans-lux">
            {t.lead}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
          {t.pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight font-sans-lux mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Architectural Visual Spread */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
            <img
              src="./images/posters/lavilla_hero_poster.jpg"
              alt="LAVILLA Facade"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                01 • Exterior Twilight Elevation
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
            <img
              src="./images/posters/lavilla_interior.jpg"
              alt="LAVILLA Living Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                02 • Double-Height Living Suite
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 group">
            <img
              src="./images/posters/lavilla_terrace.jpg"
              alt="LAVILLA Balcony Terrace"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
                03 • Cantilevered Terrace & Louvers
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { ArchitecturalPhilosophy };
