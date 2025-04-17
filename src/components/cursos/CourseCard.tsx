
import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  tag: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, tag }) => {
  const getBadgeVariant = () => {
    switch(tag.toLowerCase()) {
      case 'gratis':
        return 'bg-emerald-500 hover:bg-emerald-600';
      case 'popular':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'premium':
        return 'bg-gold-500 hover:bg-gold-600';
      case 'nuevo':
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-gray-100">
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{title}</h3>
          <Badge className={`${getBadgeVariant()} text-white`}>
            {tag}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <button className="text-orange-500 font-semibold hover:text-orange-700 transition-colors flex items-center">
          Ver más información
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
