import { Truck } from "lucide-react";
import SkipCard from "./Skipcard";
import type { SkipData } from "../types/SkipData";
import Axios from "axios";
import { useEffect, useState } from "react";

function SkipCardGrid({ setSelectedSkip }: {setSelectedSkip: (selectedSkip: SkipData | null) => void}) {
    const [skips, setSkips] = useState<SkipData[]>([])
    useEffect(() => {
        const getSkips = async () => {
            try {
                const response = await Axios.get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
                if (!response) {
                    console.log("No skip data has been found")
                } else {
                    setSkips(response.data)
                    console.log(response.data)
                }
            } catch (e) {
                console.error(e)
            }
        }
        getSkips()
    }, [])


    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Skip Size
                </h1>
                <p className="text-lg text-gray-600">
                    Select the skip size that best suits your needs
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {skips && skips.map((skip: SkipData, index: number) => (
                <SkipCard key={index}
                    id={skip.id}
                    size={skip.size}
                    hire_period_days={skip.hire_period_days}
                    transport_cost={skip.transport_cost}
                    per_tonne_cost={skip.per_tonne_cost}
                    price_before_vat={skip.price_before_vat}
                    vat={skip.vat}
                    area={skip.area}
                    forbidden={skip.forbidden}
                    allowed_on_road={skip.allowed_on_road}
                    allows_heavy_waste={skip.allows_heavy_waste}
                    features={skip.size <= 8 ? [
                        "Perfect for small projects",
                        "House clearance",
                        "Garden waste",
                        "Delivery included"
                      ] : skip.size <= 14 && skip.size > 8 ? [
                        "Most popular choice",
                        "Home renovations",
                        "Mixed waste accepted",
                        "Same day delivery"
                      ] :
                      
                      [
                        "Large capacity",
                        "Commercial projects",
                        "Construction waste",
                        "Extended hire available"
                      ]}
                    popular={skip.id === 17935 ? true : false}
                    setSelectedSkip={setSelectedSkip}
                    />
                ))}
            </div>
            
            <div className="text-center mt-12">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center justify-center mb-4">
                    <Truck className="text-gray-600 mr-2" size={20} />
                    <span className="text-gray-700 font-medium">Free Delivery & Collection</span>
                </div>
                <p className="text-gray-600 text-sm">
                    All prices include delivery, 14-day hire period, and collection. No hidden fees.
                </p>
                </div>
            </div>
            </div>
        </div>
        );
    };

export default SkipCardGrid;