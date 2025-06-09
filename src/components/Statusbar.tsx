import React, { useState } from 'react';
import { Check, ChevronRight, MapPin, Trash, Truck, Shield, Calendar, CreditCard, ChevronDown } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  icon: string;
  completed: boolean;
  active: boolean;
}

const StatusBar: React.FC = () => {
  const [currentStepIndex] = useState(2);
  const [showAllSteps, setShowAllSteps] = useState(false);

  const initialSteps: Step[] = [
    { id: 'postcode', label: 'Postcode', icon: "MapPin", completed: true, active: false },
    { id: 'waste-type', label: 'Waste Type', icon: "Trash", completed: true, active: false },
    { id: 'select-skip', label: 'Select Skip', icon: "Truck", completed: false, active: true },
    { id: 'permit-check', label: 'Permit Check', icon: "Shield", completed: false, active: false },
    { id: 'choose-date', label: 'Choose Date', icon: "Calendar", completed: false, active: false },
    { id: 'payment', label: 'Payment', icon: "CreditCard", completed: false, active: false },
  ];

  const [steps] = useState(initialSteps);

  // Mobile Compact View - shows only current step with expandable option
  const MobileCompactView = () => {
    const currentStep = steps[currentStepIndex];
    const completedCount = steps.filter(step => step.completed).length;
    
    return (
      <div className="md:hidden">
        {/* Current Step Display */}
        <div 
          className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer"
          onClick={() => setShowAllSteps(!showAllSteps)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-medium">
                {currentStepIndex + 1}
              </div>
              <div>
                <div className="font-medium text-gray-900">{currentStep.label}</div>
                <div className="text-sm text-gray-500">
                  Step {currentStepIndex + 1} of {steps.length}
                </div>
              </div>
            </div>
            <ChevronDown 
              size={20} 
              className={`text-gray-400 transition-transform duration-200 ${
                showAllSteps ? 'rotate-180' : ''
              }`}
            />
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress</span>
              <span>{completedCount}/{steps.length} completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedCount / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Expandable All Steps */}
        {showAllSteps && (
          <div className="mt-2 bg-white border border-gray-200 rounded-lg p-4 space-y-3">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                  step.active ? 'bg-blue-50' : step.completed ? 'bg-green-50' : 'bg-gray-50'
                }`}
              >
                <div className={`
                  flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium
                  ${step.completed 
                    ? 'bg-green-500 text-white' 
                    : step.active 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }
                `}>
                  {step.completed ? <Check size={12} /> : index + 1}
                </div>
                <span className={`text-sm ${
                  step.active ? 'text-blue-700 font-medium' : 
                  step.completed ? 'text-green-700' : 'text-gray-600'
                }`}>
                   {<div className='flex gap-1 items-center'>
                        {step.icon == "MapPin" ? <MapPin/> : 
                        step.icon == "Trash" ? <Trash /> : 
                        step.icon == "Truck" ? <Truck /> : 
                        step.icon == "Shield" ? <Shield /> : 
                        step.icon == "Calendar" ? <Calendar /> : 
                        <CreditCard />}
                        {step.label}
                    </div>}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Desktop Full View
  const DesktopView = () => (
    <div className="hidden md:flex items-center justify-between bg-gray-50 p-6 rounded-lg">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div 
            className={`flex items-center space-x-3 cursor-pointer transition-all duration-200 ${
              step.active ? 'transform scale-105' : ''
            }`}
          >
            <div className={`
              flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
              ${step.completed 
                ? 'bg-green-500 border-green-500 text-white' 
                : step.active 
                  ? 'bg-blue-500 border-blue-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-400'
              }
            `}>
              {step.completed ? (
                <Check size={16} />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </div>
            <span className={`
              text-sm font-medium transition-colors duration-300
              ${step.completed 
                ? 'text-green-600' 
                : step.active 
                  ? 'text-blue-600' 
                  : 'text-gray-500'
              }
            `}>
                {<div className='flex gap-1 items-center'>
                    {step.icon == "MapPin" ? <MapPin/> : 
                    step.icon == "Trash" ? <Trash /> : 
                    step.icon == "Truck" ? <Truck /> : 
                    step.icon == "Shield" ? <Shield /> : 
                    step.icon == "Calendar" ? <Calendar /> : 
                    <CreditCard />}
                    {step.label}
                </div>}
            </span>
          </div>
          
          {index < steps.length - 1 && (
            <ChevronRight 
              size={16} 
              className={`
                transition-colors duration-300
                ${index < currentStepIndex ? 'text-green-400' : 'text-gray-300'}
              `}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="space-y-6">
        <div>
          <DesktopView />
        </div>
        <div>
          <MobileCompactView />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;