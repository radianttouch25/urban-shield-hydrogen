
const ProductCard = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-radial from-gold/20 via-transparent to-transparent opacity-70 filter blur-xl"></div>
      <img 
        src="/lovable-uploads/4734eeae-b7cb-4752-96fd-8a6967e6c29e.png" 
        alt="Urban Shield Product" 
        className="w-full h-auto rounded-xl border border-white/10 animate-float"
      />
      {/* Product launch info */}
      <div className="absolute -bottom-6 left-0 right-0 mx-auto w-4/5 bg-dark-light/80 backdrop-blur-sm p-4 rounded-lg border border-white/10">
        <div className="flex justify-between items-center">
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
