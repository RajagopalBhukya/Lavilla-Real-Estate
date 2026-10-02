import { useSessionState } from "../hooks/storage";
import { Sparkles, ArrowRight, Check } from "lucide-react";
const PropertyStorySection = ({ onOpenBrochure }) => {
  const [activeZone, setActiveZone] = useSessionState("zone", 0, true);
  const zones = [
    {
      id: "living",
      title: "Grand Living Gallery",
      subtitle: "6.5m Double-Height Glass Pavilion",
      description:
        "Sculpted with floor-to-ceiling acoustic glass, double-height ceiling voids, and suspended circular brass luminaires. The open marble floor extends seamlessly to the exterior reflection pool deck.",
      image: "./images/posters/lavilla_interior.jpg",
      specs: [
        "Ceiling height: 6.5 meters continuous void",
        "Finishes: Calacatta marble slab & vertical walnut slats",
        "Lighting: Architectural diffused cove LEDs + circular pendants",
        "Glazing: Double-laminated acoustic low-iron glass",
      ],
    },
    {
      id: "culinary",
      title: "Culinary Pavilion & Dining",
      subtitle: "Waterfall Calacatta Gold & Teak",
      description:
        "An open-concept gourmet kitchen featuring a monolithic marble waterfall island, integrated Bosch and Miele culinary appliances, and temperature-controlled vertical wine display cabinetry.",
      image: "./images/posters/lavilla_kitchen.jpg",
      specs: [
        "Island: 3.8m bookmatched Calacatta gold marble",
        "Cabinetry: Fluted Indonesian teak with bronze hardware",
        "Appliances: Concealed induction, combi-steam & wine cellar",
        "Dining: Custom 8-seat monolithic solid wood banquet",
      ],
    },
    {
      id: "bedroom",
      title: "Master Suite Sanctuary",
      subtitle: "Monolithic Stone Bath & Terrace",
      description:
        "A private residential wing with upholstered Italian king bed, floor-to-ceiling marble feature wall, walk-in dressing suite, and direct balcony access overlooking the tropical canopy.",
      image: "./images/posters/lavilla_bedroom.jpg",
      specs: [
        "Bathroom: Freestanding volcanic stone soaking tub",
        "Dressing: Custom walk-in wardrobe with bronze glass doors",
        "HVAC: Whisper-quiet concealed inverter climate control",
        "Orientation: Sunset west-facing with motorized sheer drapes",
      ],
    },
    {
      id: "sunset",
      title: "Sunset Sky Terrace Lounge",
      subtitle: "Cantilevered Horizon Deck",
      description:
        "Perched above the tree canopy, the upper cantilevered terrace features deep teak wood ceilings, an oversized modular sectional lounge, and unimpeded views of the Balinese twilight sky.",
      image: "./images/posters/lavilla_sunset.jpg",
      specs: [
        "Decking: Seasoned ironwood (Ulin) marine-grade timber",
        "Furniture: Custom Sunbrella outdoor upholstered modular lounge",
        "Ceiling: Teak planking with dimmable recessed downlights",
        "Railing: Frameless structural glass for uninterrupted vistas",
      ],
    },
  ];
  const current = zones[Math.min(3, Math.max(0, Math.round(activeZone)))];
  return (
    <section
      id="property-story"
      className="relative w-full py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-[#0b0c0e] border-t border-white/10 text-white"
    >
      <div className="max-w-[1520px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#c5a880] flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE RESIDENCE MONOGRAPH</span>
            </span>
            <h2 className="font-sans-lux text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              SPATIAL CHOREOGRAPHY & MATERIAL REFINEMENT
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/70 font-light leading-relaxed font-sans-lux">
            Every cubic meter of the villa is engineered to elevate the human
            senses: raw textures, soothing dusk acoustic reverberation, and
            seamless indoor-outdoor tropical flow.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex flex-wrap gap-2 pt-10 pb-8">
          {zones.map((zone, idx) => (
            <button
              key={zone.id}
              aria-pressed={activeZone === idx}
              onClick={() => setActiveZone(idx)}
              className={`px-5 py-3 rounded-xl text-xs font-sans-lux uppercase tracking-[0.16em] transition-all font-semibold cursor-pointer ${activeZone === idx ? "bg-[#c5a880] text-black shadow-lg scale-[1.02]" : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"}`}
            >
              0{idx + 1} • {zone.title}
            </button>
          ))}
        </div>

        {/* Interactive Zone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-12">
          {/* Main Visual */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/10 shadow-2xl group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[#c5a880] text-xs font-mono font-bold tracking-wider">
              {current.subtitle}
            </div>
          </div>

          {/* Detailed Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a880] block mb-1">
                ZONE 0{activeZone + 1} SPECIFICATION
              </span>
              <h3 className="font-sans-lux text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {current.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Architectural Bulleted Specs */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2.5">
              {current.specs.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-white/80"
                >
                  <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBrochure}
                className="flex-1 py-3.5 px-6 rounded-xl bg-[#c5a880] hover:bg-[#d6ba94] text-black font-bold text-xs uppercase tracking-[0.16em] font-sans-lux flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer"
              >
                <span>Request Detailed Monograph</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { PropertyStorySection };
