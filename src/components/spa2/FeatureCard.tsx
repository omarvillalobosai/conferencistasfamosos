
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  features: string[];
}

const FeatureCard = ({ icon, title, features }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
