import { useSessionState } from "../hooks/storage";
import { Check, ArrowRight } from "lucide-react";
const VillaCollection = ({ lang, onOpenBrochure }) => {
  const [activeTab, setActiveTab] = useSessionState("collection", 1, true);
  const villas = [
    {
      id: "villa-cyan",
      name: "VILLA CYAN",
      bedrooms: 1,
      area: 70,
      bathrooms: 1.5,
      poolSize: "6.0 \xD7 2.8 m",
      landArea: "145 m\xB2",
      priceFrom: "$198,000",
      image: "./images/posters/lavilla_hero_poster.jpg",
      descRu:
        "\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0430\u044F \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0430\u044F \u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0446\u0438\u044F \u0434\u043B\u044F \u043F\u0430\u0440 \u0438 \u0432\u044B\u0441\u043E\u043A\u043E\u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0439 \u043A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u043E\u0439 \u0430\u0440\u0435\u043D\u0434\u044B. \u041F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0439 \u0438\u043D\u0444\u0438\u043D\u0438\u0442\u0438-\u0431\u0430\u0441\u0441\u0435\u0439\u043D \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u0430\u044F \u043A\u0443\u0445\u043D\u044F-\u0433\u043E\u0441\u0442\u0438\u043D\u0430\u044F.",
      descEn:
        "Sculptural luxury pavilion optimized for couples and premium short-stay returns. Private plunge pool and open-plan kitchen pavilion.",
      featuresRu: [
        "\u041C\u0430\u0441\u0442\u0435\u0440-\u0441\u043F\u0430\u043B\u044C\u043D\u044F \u0441 \u0432\u0430\u043D\u043D\u043E\u0439 \u0438\u0437 \u0446\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u0430\u043C\u043D\u044F",
        "\u0418\u043D\u0444\u0438\u043D\u0438\u0442\u0438-\u0431\u0430\u0441\u0441\u0435\u0439\u043D \u0441 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u043E\u0439",
        "\u041A\u0443\u0445\u043D\u044F \u0441 \u0442\u0435\u0445\u043D\u0438\u043A\u043E\u0439 Bosch",
        "25+25 \u043B\u0435\u0442 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0430\u0440\u0435\u043D\u0434\u044B",
      ],
      featuresEn: [
        "Master suite with monolithic stone bath",
        "Ambient illuminated plunge pool",
        "Kitchen pavilion with Bosch suite",
        "25+25 Year leasehold deed",
      ],
    },
    {
      id: "villa-terra",
      name: "VILLA TERRA",
      bedrooms: 2,
      area: 105,
      bathrooms: 2.5,
      poolSize: "8.5 \xD7 3.2 m",
      landArea: "220 m\xB2",
      priceFrom: "$285,000",
      image: "./images/posters/lavilla_interior.jpg",
      descRu:
        "\u0414\u0432\u0443\u0445\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u0430\u044F \u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0446\u0438\u044F \u0441 \u0434\u0432\u0443\u0441\u0432\u0435\u0442\u043D\u043E\u0439 \u0433\u043E\u0441\u0442\u0438\u043D\u043E\u0439 \u0438 \u0434\u0432\u0443\u043C\u044F \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438 \u043C\u0430\u0441\u0442\u0435\u0440-\u0441\u043F\u0430\u043B\u044C\u043D\u044F\u043C\u0438. \u0418\u0434\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043B\u0430\u043D\u0441 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u0438.",
      descEn:
        "Duplex residence with double-height ceiling gallery and two isolated king suites. The benchmark for rental yield and luxury family stays.",
      featuresRu: [
        "\u0414\u0432\u0443\u0441\u0432\u0435\u0442\u043D\u0430\u044F \u0433\u043E\u0441\u0442\u0438\u043D\u0430\u044F \u043F\u043E\u0442\u043E\u043B\u043A\u0438 6.5\u043C",
        "2 \u0438\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043C\u0430\u0441\u0442\u0435\u0440-\u0441\u043F\u0430\u043B\u044C\u043D\u0438",
        "\u0422\u0435\u0440\u0440\u0430\u0441\u0430 \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u043C \u0443\u0440\u043E\u0432\u043D\u0435 \u0441 \u043B\u0430\u043C\u0435\u043B\u044F\u043C\u0438",
        "\u0412\u044B\u0441\u043E\u043A\u0438\u0439 ROI 14.2% \u0433\u043E\u0434\u043E\u0432\u044B\u0445",
      ],
      featuresEn: [
        "6.5m soaring double-height living room",
        "2 isolated king ensuite bedrooms",
        "Upper cantilevered viewing terrace",
        "Projected net yield of 14.2% p.a.",
      ],
    },
    {
      id: "villa-sol",
      name: "VILLA SOL",
      bedrooms: 3,
      area: 140,
      bathrooms: 3.5,
      poolSize: "11.0 \xD7 3.8 m",
      landArea: "310 m\xB2",
      priceFrom: "$365,000",
      image: "./images/posters/lavilla_terrace.jpg",
      descRu:
        "\u0424\u043B\u0430\u0433\u043C\u0430\u043D\u0441\u043A\u0430\u044F \u0442\u0440\u0435\u0445\u0441\u043F\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0438\u043B\u043B\u0430 \u0441 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u043D\u043E\u0439 \u043F\u0440\u0438\u0434\u043E\u043C\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0435\u0439, 11-\u043C\u0435\u0442\u0440\u043E\u0432\u044B\u043C \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u043E\u043C \u0438 \u0437\u043E\u043D\u043E\u0439 BBQ. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u0438\u0432\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u0432 \u043E\u043A\u0440\u0443\u0436\u0435\u043D\u0438\u0438 \u043F\u0430\u043B\u044C\u043C.",
      descEn:
        "Flagship 3-bedroom compound with expansive garden grounds, 11-meter reflection pool, outdoor shower, and BBQ lounge terrace.",
      featuresRu: [
        "3 \u043C\u0430\u0441\u0442\u0435\u0440-\u0441\u044C\u044E\u0442\u0430 \u0441 \u0433\u0430\u0440\u0434\u0435\u0440\u043E\u0431\u043D\u044B\u043C\u0438",
        "\u0411\u0430\u0441\u0441\u0435\u0439\u043D 11 \u043C\u0435\u0442\u0440\u043E\u0432 \u0441 \u0437\u043E\u043D\u043E\u0439 \u0448\u0435\u0437\u043B\u043E\u043D\u0433\u043E\u0432",
        "\u041A\u0440\u044B\u0442\u044B\u0439 \u043F\u0430\u0440\u043A\u0438\u043D\u0433 \u043D\u0430 2 \u0430\u0432\u0442\u043E",
        "\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F \u043F\u043E\u0434 \u043A\u043B\u044E\u0447",
      ],
      featuresEn: [
        "3 master suites with walk-in closets",
        "11m lap pool with sundeck daybeds",
        "Covered parking for 2 vehicles",
        "Full turn-key interior FF&E package",
      ],
    },
  ];
  const currentVilla = villas[Math.min(2, Math.max(0, Math.round(activeTab)))];
  const t = {
    ru: {
      tag: "\u041A\u041E\u041B\u041B\u0415\u041A\u0426\u0418\u042F \u0420\u0415\u0417\u0418\u0414\u0415\u041D\u0426\u0418\u0419",
      title:
        "\u0412\u042B\u0411\u0415\u0420\u0418\u0422\u0415 \u0412\u0410\u0428\u0423 \u0410\u0420\u0425\u0418\u0422\u0415\u041A\u0422\u0423\u0420\u041D\u0423\u042E \u041F\u041B\u0410\u041D\u0418\u0420\u041E\u0412\u041A\u0423",
      lead: "\u0412\u0441\u0435 \u0432\u0438\u043B\u043B\u044B \u0441\u0434\u0430\u044E\u0442\u0441\u044F \u0441 \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043E\u0442\u0434\u0435\u043B\u043A\u043E\u0439, \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u044C\u044E \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0442\u0438\u043A\u0430, \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u043E\u0439 Hansgrohe \u0438 \u0442\u0435\u0445\u043D\u0438\u043A\u043E\u0439 \u043F\u0440\u0435\u043C\u0438\u0443\u043C-\u043A\u043B\u0430\u0441\u0441\u0430.",
      bedrooms: "\u0441\u043F\u0430\u043B\u044C\u043D\u0438",
      area: "\u0436\u0438\u043B\u0430\u044F \u043F\u043B\u043E\u0449\u0430\u0434\u044C",
      bathrooms: "\u0441\u0430\u043D\u0443\u0437\u043B\u044B",
      pool: "\u0440\u0430\u0437\u043C\u0435\u0440 \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0430",
      land: "\u043F\u043B\u043E\u0449\u0430\u0434\u044C \u0443\u0447\u0430\u0441\u0442\u043A\u0430",
      price:
        "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0442",
      requestBlueprint:
        "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0443 \u0438 \u0440\u0430\u0441\u0447\u0435\u0442 \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u0438",
    },
    en: {
      tag: "RESIDENCE COLLECTION",
      title: "SELECT YOUR ARCHITECTURAL FLOORPLAN",
      lead: "Every residence is delivered fully finished with bespoke solid teak cabinetry, Hansgrohe fixtures, and turnkey premium appliance suites.",
      bedrooms: "bedrooms",
      area: "interior area",
      bathrooms: "bathrooms",
      pool: "pool dimensions",
      land: "land plot",
      price: "Pricing from",
      requestBlueprint: "Download Residence Overview",
    },
  }[lang];
  return (
    <section
      id="collection"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#0b0c0e]"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c5a880] block mb-3">
            {t.tag}
          </span>
          <h2 className="font-sans-lux text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            {t.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/70 font-light font-sans-lux">
            {t.lead}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-12">
          {villas.map((villa, idx) => (
            <button
              key={villa.id}
              aria-pressed={activeTab === idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-lg text-xs font-sans-lux uppercase tracking-[0.16em] transition-all font-semibold cursor-pointer ${activeTab === idx ? "bg-[#c5a880] text-black shadow-lg" : "text-white/70 hover:text-white hover:bg-white/5"}`}
            >
              {villa.name} • {villa.bedrooms}{" "}
              {lang === "ru" ? "\u0421\u041F" : "BED"} ({villa.area} м²)
            </button>
          ))}
        </div>

        {/* Active Villa Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Visual Showcase */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl group">
            <img
              src={currentVilla.image}
              alt={currentVilla.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[#c5a880] text-xs font-mono font-bold tracking-wider">
              {currentVilla.name} • {currentVilla.area} m²
            </div>
          </div>

          {/* Details & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-sans-lux text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                  {currentVilla.name}
                </h3>
                <span className="text-xl sm:text-2xl font-bold text-[#c5a880] font-sans-lux">
                  {currentVilla.priceFrom}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {lang === "ru" ? currentVilla.descRu : currentVilla.descEn}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                  {t.bedrooms}
                </span>
                <span className="text-base font-bold text-white font-sans-lux">
                  {currentVilla.bedrooms} Ensuite
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                  {t.area}
                </span>
                <span className="text-base font-bold text-white font-sans-lux">
                  {currentVilla.area} m²
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                  {t.pool}
                </span>
                <span className="text-base font-bold text-white font-sans-lux">
                  {currentVilla.poolSize}
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-white/40 block">
                  {t.land}
                </span>
                <span className="text-base font-bold text-[#c5a880] font-sans-lux">
                  {currentVilla.landArea}
                </span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-2">
              {(lang === "ru"
                ? currentVilla.featuresRu
                : currentVilla.featuresEn
              ).map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-white/80"
                >
                  <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={onOpenBrochure}
              className="w-full py-4 rounded-xl bg-[#c5a880] hover:bg-[#d6ba94] text-black font-bold text-xs uppercase tracking-[0.16em] font-sans-lux flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer"
            >
              <span>{t.requestBlueprint}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export { VillaCollection };
