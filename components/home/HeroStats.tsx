import { siteConfig } from "@/data/site";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
      {siteConfig.stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}