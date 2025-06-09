import { X, ShoppingCart, ArrowRight, Calendar, Truck } from 'lucide-react';
import type { SkipData } from '../types/SkipData';
interface StickyBottomBarProps {
  selectedSkip: SkipData | null;
  onClear: () => void;
  onProceed: () => void;
}

function StickyBottomBar({ 
  selectedSkip, 
  onClear, 
  onProceed,
}: StickyBottomBarProps) {
  if (!selectedSkip) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={onClear} />
    
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-xl z-50 animate-in slide-in-from-bottom duration-300">
        <div className="mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 rounded-lg p-3 hidden sm:block">
                <div className="w-8 h-5 bg-gradient-to-r from-amber-400 to-amber-500 rounded relative">
                  <div className="absolute inset-0.5 border border-amber-600/30 rounded"></div>
                  <div className="absolute -top-0.5 left-1 w-1 h-2 bg-amber-600 rounded-t"></div>
                  <div className="absolute -top-0.5 right-1 w-1 h-2 bg-amber-600 rounded-t"></div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {`${selectedSkip.size} Yards Hire`}
                  </h3>
                  {selectedSkip.popular && (
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center space-x-1">
                    <ShoppingCart size={14} />
                    <span>{`${selectedSkip.size} Yards`}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{`${selectedSkip.hire_period_days} days`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Total</div>
                <div className="text-2xl font-bold text-gray-900">
                  £{selectedSkip.price_before_vat}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={onClear}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Clear selection"
                >
                  <X size={20} />
                </button>

                <button
                  onClick={onProceed}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md"
                >
                  <span className="hidden sm:inline">Continue Booking</span>
                  <span className="sm:hidden">Continue</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-center text-sm text-gray-600">
              <Truck size={16} className="mr-2" />
              <span>Free delivery & collection included • No hidden fees</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyBottomBar;