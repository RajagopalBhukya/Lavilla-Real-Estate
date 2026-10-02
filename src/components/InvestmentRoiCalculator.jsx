import { calculateInvestment } from "../hooks/investment";
import { useSessionState } from "../hooks/storage";
import { ShieldCheck, ArrowRight } from "lucide-react";
const InvestmentRoiCalculator = ({ lang, onOpenBrochure }) => {
  const [villaIndex, setVillaIndex] = useSessionState(
    "calculator_villa",
    1,
    true,
  );
  const [adr, setAdr] = useSessionState("daily_rate", 340, true);
  const [occupancy, setOccupancy] = useSessionState("occupancy", 78, true);
  const villaPrices = [198e3, 285e3, 365e3];
  const villaNames = [
    "Villa Cyan (1 Bed)",
    "Villa Terra (2 Bed)",
    "Villa Sol (3 Bed)",
  ];
  const {
    villaPrice,
    occupiedNights,
    grossRevenue,
    managementFee,
    operationalReserve,
    netIncome,
    netYield,
    paybackYears,
  } = calculateInvestment(villaIndex, adr, occupancy);
  const t = {
    ru: {
      tag: "\u0418\u041D\u0412\u0415\u0421\u0422\u0418\u0426\u0418\u041E\u041D\u041D\u0410\u042F \u041C\u041E\u0414\u0415\u041B\u042C",
      title:
        "\u041A\u0410\u041B\u042C\u041A\u0423\u041B\u042F\u0422\u041E\u0420 \u0414\u041E\u0425\u041E\u0414\u041D\u041E\u0421\u0422\u0418 \u0418 \u041E\u041A\u0423\u041F\u0410\u0415\u041C\u041E\u0421\u0422\u0418",
      lead: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0440\u044B\u043D\u043A\u0430 \u043A\u0440\u0430\u0442\u043A\u043E\u0441\u0440\u043E\u0447\u043D\u043E\u0439 \u0430\u0440\u0435\u043D\u0434\u044B \u0427\u0430\u043D\u0433\u0443 \u0438 \u0423\u043B\u0443\u0432\u0430\u0442\u0443 (2024\u20132026).",
      chooseVilla:
        "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0438\u043B\u043B\u0443:",
      dailyRate:
        "\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0440\u0435\u043D\u0434\u044B \u0432 \u0441\u0443\u0442\u043A\u0438 (ADR):",
      occupancyLabel:
        "\u0421\u0440\u0435\u0434\u043D\u0435\u0433\u043E\u0434\u043E\u0432\u0430\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u043C\u043E\u0441\u0442\u044C (Occupancy):",
      annualGross:
        "\u0412\u0430\u043B\u043E\u0432\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u0432 \u0433\u043E\u0434:",
      management:
        "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u043E\u043C (18%):",
      netProfit:
        "\u0427\u0438\u0441\u0442\u044B\u0439 \u0434\u043E\u0445\u043E\u0434 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430 \u0432 \u0433\u043E\u0434:",
      netRoi:
        "\u0427\u0438\u0441\u0442\u0430\u044F \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C (Net ROI):",
      payback:
        "\u0421\u0440\u043E\u043A \u043E\u043A\u0443\u043F\u0430\u0435\u043C\u043E\u0441\u0442\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0439:",
      leaseholdBenefit:
        "\u0417\u0435\u043C\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0430\u0432\u043E 25+25 \u043B\u0435\u0442 \u0441 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u043C \u043F\u0440\u0430\u0432\u043E\u043C \u043F\u0440\u043E\u043B\u043E\u043D\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u043A\u0430\u0434\u0430\u0441\u0442\u0440\u043E\u0432\u043E\u0439 \u043E\u0446\u0435\u043D\u043A\u0435.",
      cta: "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442",
    },
    en: {
      tag: "FINANCIAL ARCHITECTURE",
      title: "PRO-FORMA INVESTMENT & YIELD CALCULATOR",
      lead: "Explore an illustrative rental scenario. Adjust the nightly rate and occupancy to see how the estimate changes.",
      chooseVilla: "Select Villa Type:",
      dailyRate: "Average Daily Rate (ADR):",
      occupancyLabel: "Projected Annual Occupancy:",
      annualGross: "Gross Annual Rental Revenue:",
      management: "Hotel Operator & Booking Fee (18%):",
      netProfit: "Net Annual Cash Flow (NOI):",
      netRoi: "Net Annualized Yield (ROI):",
      payback: "Projected Payback Horizon:",
      leaseholdBenefit:
        "Illustrative only. Excludes taxes, financing, acquisition costs and changes in property value. Confirm prices and lease terms with the developer.",
      cta: "Download Residence Overview",
    },
  }[lang];
  return (
    <section
      id="investment"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#0e1014] border-t border-white/10"
    >
      <div className="max-w-[1520px] mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
            {/* Villa Select */}
            <div>
              <label className="text-xs uppercase tracking-wider text-white/60 block mb-2 font-medium">
                {t.chooseVilla}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {villaNames.map((name, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setVillaIndex(i);
                      setAdr(i === 0 ? 240 : i === 1 ? 340 : 480);
                    }}
                    className={`py-3 px-2 rounded-xl text-[11px] font-sans-lux uppercase tracking-wider transition-all cursor-pointer ${villaIndex === i ? "bg-[#c5a880] text-black font-bold shadow-md" : "bg-white/5 text-white/70 hover:bg-white/10"}`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* ADR Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-white/60">
                  {t.dailyRate}
                </span>
                <span className="font-mono text-base font-bold text-[#c5a880]">
                  ${adr} / night
                </span>
              </div>
              <input
                type="range"
                aria-label="Average nightly rate"
                min="180"
                max="750"
                step="10"
                value={adr}
                onChange={(e) => setAdr(Number(e.target.value))}
                className="w-full accent-[#c5a880] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
                <span>$180 (Low season)</span>
                <span>$750 (Peak season)</span>
              </div>
            </div>

            {/* Occupancy Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase tracking-wider text-white/60">
                  {t.occupancyLabel}
                </span>
                <span className="font-mono text-base font-bold text-white">
                  {occupancy}% ({occupiedNights} nights)
                </span>
              </div>
              <input
                type="range"
                aria-label="Annual occupancy"
                min="55"
                max="92"
                step="1"
                value={occupancy}
                onChange={(e) => setOccupancy(Number(e.target.value))}
                className="w-full accent-[#c5a880] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
                <span>55% (Conservative)</span>
                <span>78% (Market benchmark)</span>
                <span>92% (High demand)</span>
              </div>
            </div>

            {/* Summary badge */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
              <p className="text-xs text-white/70 leading-relaxed font-light">
                {t.leaseholdBenefit}
              </p>
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#14171d] to-[#0b0c0e] border border-[#c5a880]/30 shadow-2xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-white/60">
                Purchase Price
              </span>
              <span className="font-sans-lux text-2xl font-bold text-white">
                ${villaPrice.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  {t.netRoi}
                </span>
                <span className="font-sans-lux text-3xl sm:text-4xl font-extrabold text-[#c5a880] block">
                  {netYield}%
                </span>
                <span className="text-[10px] text-emerald-400 font-mono mt-1 block">
                  After modeled fees and reserve
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1">
                  {t.payback}
                </span>
                <span className="font-sans-lux text-3xl sm:text-4xl font-extrabold text-white block">
                  {paybackYears}{" "}
                  <span className="text-sm font-normal text-white/60">
                    years
                  </span>
                </span>
                <span className="text-[10px] text-white/40 font-mono mt-1 block">
                  Full investment recovery
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex justify-between text-white/70">
                <span>{t.annualGross}</span>
                <span className="font-mono text-white font-semibold">
                  ${Math.round(grossRevenue).toLocaleString()} / yr
                </span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>{t.management}</span>
                <span className="font-mono text-red-300">
                  -${Math.round(managementFee).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Operational & Maintenance Reserve (6%):</span>
                <span className="font-mono text-red-300">
                  -${Math.round(operationalReserve).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/10 text-sm font-bold text-white">
                <span>{t.netProfit}</span>
                <span className="font-mono text-[#c5a880] text-base">
                  ${Math.round(netIncome).toLocaleString()} / yr
                </span>
              </div>
            </div>

            <button
              onClick={onOpenBrochure}
              className="w-full py-4 rounded-xl bg-[#c5a880] hover:bg-[#d6ba94] text-black font-bold text-xs uppercase tracking-[0.16em] font-sans-lux flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export { InvestmentRoiCalculator };
