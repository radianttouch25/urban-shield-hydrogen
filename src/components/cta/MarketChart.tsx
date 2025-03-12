
const MarketChart = () => {
  return (
    <div className="mt-8 p-6 bg-dark-light/30 backdrop-blur-sm rounded-xl border border-white/10">
      <h3 className="text-xl font-bold mb-4 text-white">Market Growth Projection</h3>
      <div className="h-60 w-full">
        <div className="h-full flex items-end">
          <div className="flex-1 flex flex-col items-center justify-end h-full">
            <div className="h-[40%] w-full bg-gradient-to-t from-blue-500/70 to-blue-500/20 rounded-t-md relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$240B</span>
            </div>
            <span className="text-xs mt-2 text-gray-400">2024</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-end h-full">
            <div className="h-[48%] w-full bg-gradient-to-t from-blue-500/70 to-blue-500/20 rounded-t-md relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$288B</span>
            </div>
            <span className="text-xs mt-2 text-gray-400">2025</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-end h-full">
            <div className="h-[58%] w-full bg-gradient-to-t from-blue-500/70 to-blue-500/20 rounded-t-md relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$345B</span>
            </div>
            <span className="text-xs mt-2 text-gray-400">2026</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-end h-full">
            <div className="h-[72%] w-full bg-gradient-to-t from-gold/70 to-gold/20 rounded-t-md relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-300">$418B</span>
            </div>
            <span className="text-xs mt-2 text-gold">2028</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">
        Global skincare market projection (in billions USD) | Anti-pollution segment growing at 8.2% CAGR
      </p>
    </div>
  );
};

export default MarketChart;
