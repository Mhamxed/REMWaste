import { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle, TriangleAlert } from 'lucide-react';
import type { SkipData } from '../types/SkipData';

interface SkipCardProps {
  size: string;
  capacity: string;
  duration: string;
  price: number;
  popular?: boolean;
  features: string[];
  setSelectedSkip: (selectedSkip: SkipData | null) => void;
  allowed_on_road: boolean;
}

function SkipCard({ 
  size, 
  capacity, 
  duration, 
  price, 
  popular = false,
  features,
  setSelectedSkip, 
  allowed_on_road,
}: SkipCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`relative bg-white rounded-xl border transition-all duration-300 h-full
            ${popular 
            ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
            : 'border-gray-200 hover:border-gray-300'
            }
            ${isHovered ? 'shadow-xl' : 'shadow-md'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        {/* Popular Badge */}
        {popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
            </div>
            </div>
        )}

        <div className="p-6 flex flex-col h-full">
            {/* Header */}
            <div className="text-center mb-6">
                <div className="inline-block bg-gray-100 rounded-lg p-4 mb-4">
                    <div className="relative">
                    {/* Simple Skip Illustration */}
                    <div className="w-16 h-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg relative">
                        <div className="absolute inset-1 border border-amber-600/30 rounded"></div>
                        <div className="absolute -top-1 left-2 w-2 h-3 bg-amber-600 rounded-t"></div>
                        <div className="absolute -top-1 right-2 w-2 h-3 bg-amber-600 rounded-t"></div>
                    </div>
                    </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {size}
                </h3>
                
                <div className="flex items-center justify-center text-gray-600 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {duration}
                </div>
            </div>

            {/* Features */}
            {features && <div className="space-y-3 mb-6 flex-grow">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </div>
            ))}
            </div>}

           {!allowed_on_road && <div className="mb-2 mx-6 inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wide
                transition-all duration-200 ease-in-out
                transform hover:scale-105 active:scale-95 px-2 py-1 text-xs gap-1 
                bg-yellow-400 text-white shadow-lg hover:bg-yellow-500 hover:border-yellow-500">
                <TriangleAlert 
                    size={16} 
                    className="flex-shrink-0" 
                    strokeWidth={2.5}
                />
                <span className="whitespace-nowrap">
                    Not Allowed On Road
                </span>
            </div>}

            {/* Capacity Badge */}
            <div className="text-center mb-6">
                <div className={`
                    inline-block px-3 py-1 rounded-full text-sm font-medium
                    ${popular 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-700'
                    }
                `}>
                    {capacity} Capacity
                </div>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
                <div className="text-gray-500 text-sm mb-1">From</div>
                    <div className={`
                        text-3xl font-bold
                        ${popular ? 'text-blue-600' : 'text-gray-900'}
                    `}>
                        £{price}
                    </div>
                </div>

                {/* Action Button */}
                <button 
                onClick={() => {
                    setSelectedSkip({
                    size: size,
                    capacity: capacity,
                    duration: duration,
                    price: price,
                    popular: popular
                })}}
                className={`
                w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center
                ${popular
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }
                ${isHovered ? 'transform -translate-y-0.5' : ''}
                `}>
                <span className="mr-2">Select This Skip</span>
                    <ArrowRight size={16} />
                </button>
        </div>
    </div>
    );
};

export default SkipCard;