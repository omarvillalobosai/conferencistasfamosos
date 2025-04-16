
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  const stepLabels = [
    'Introducción',
    'Tus datos',
    'Evaluación',
    'Finalizar'
  ];

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index}
            className="flex flex-col items-center w-full"
          >
            <div 
              className={`w-4 h-4 rounded-full ${
                index + 1 === currentStep ? 'bg-orange-500' : 
                index + 1 < currentStep ? 'bg-orange-300' : 'bg-gray-300'
              }`}
            />
            {index < totalSteps - 1 && (
              <div className={`h-0.5 w-full ${
                index + 1 < currentStep ? 'bg-orange-300' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-600">
        {stepLabels.map((label, index) => (
          <span 
            key={index} 
            className={`${index === 0 ? 'text-left' : index === totalSteps - 1 ? 'text-right' : 'text-center'} ${
              index + 1 === currentStep ? 'font-bold text-orange-500' : ''
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
