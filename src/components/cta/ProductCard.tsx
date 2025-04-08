const ProductCard = () => {
  return (
    <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] max-w-md mx-auto">
      {/* Enhanced background effects */}
      <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 animate-pulse-gentle filter blur-xl group-hover:from-gold/30"></div>

      {/* Decorative circle behind product */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-purple-500/5 rounded-full opacity-70 transform scale-90 blur-sm"></div>

      {/* Gold accent highlights */}
      <div className="absolute -right-4 -top-4 w-12 h-12 bg-gradient-to-br from-gold/40 to-gold/10 rounded-full blur-md animate-pulse-slow"></div>
      <div className="absolute -left-4 -bottom-4 w-10 h-10 bg-gradient-to-br from-gold/30 to-gold/5 rounded-full blur-md animate-pulse-slow animate-delay-500"></div>

      {/* Premium product container with consistent border */}
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          padding: '2px',
          background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1), rgba(212,175,55,0.3))'
        }}
      >
        {/* Inner container */}
        <div className="relative overflow-hidden rounded-[calc(1rem-2px)] backdrop-blur-sm bg-dark/50 p-1">
          {/* Shine animation effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1500 ease-in-out"></div>

          {/* Product image with premium styling */}
          <div className="relative animate-float-gentle">
            <img
              src="/assets/4734eeae-b7cb-4752-96fd-8a6967e6c29e.png"
              alt="Urban Shield Product"
              className="w-full h-auto rounded-xl drop-shadow-2xl z-10"
            />

            {/* Subtle reflection effect */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/10 to-transparent blur-sm transform scale-y-50 opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Product launch info - enhanced and responsive */}
      <div className="absolute -bottom-6 left-0 right-0 mx-auto w-11/12 sm:w-4/5 bg-dark-light/80 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 transform transition-all duration-300 group-hover:border-gold/30">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-400">Launch Price</p>
            <div className="flex items-end">
              <span className="text-lg font-bold text-gold">£34.99</span>
              <span className="text-xs text-gray-400 ml-1 line-through">£59.99</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-400">Launch Date</p>
            <p className="text-sm font-medium text-white">March 31, 2025</p>
          </div>
          <div className="bg-gold/20 px-3 py-1 rounded-full">
            <span className="text-xs font-medium text-gold">42% OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
