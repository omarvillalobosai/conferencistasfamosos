
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex justify-center mb-6">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            index + 1 === currentStep ? 'bg-orange-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StepIndicator;
