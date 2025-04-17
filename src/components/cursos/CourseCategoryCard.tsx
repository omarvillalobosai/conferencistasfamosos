
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lock, Play } from 'lucide-react';
import { CourseCategory } from './types';

interface CourseCategoryCardProps {
  category: CourseCategory;
  isRegistered: boolean;
  onViewCourses: (categoryId: string) => void;
}

const CourseCategoryCard: React.FC<CourseCategoryCardProps> = ({ 
  category, 
  isRegistered, 
  onViewCourses 
}) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{category.description}</p>
        <div className="aspect-video bg-slate-900 rounded-lg mb-4 overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/videoseries?list=${category.playlistId}`}
            title={category.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Button 
          className="w-full bg-orange-500 hover:bg-orange-600 mt-2 gap-2"
          onClick={() => onViewCourses(category.id)}
        >
          {isRegistered ? <Play className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
          {category.ctaText}
        </Button>
      </div>
    </div>
  );
};

export default CourseCategoryCard;
