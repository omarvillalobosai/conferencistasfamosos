
import React from 'react';
import { Button } from '@/components/ui/button';
import CourseCard from './CourseCard';

interface Course {
  title: string;
  description: string;
  tag: string;
}

interface TabContent {
  title: string;
  description: string;
  courses: Course[];
  cta?: {
    text: string;
    link: string;
  }
}

interface CourseTabContentProps {
  content: TabContent;
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const CourseTabContent: React.FC<CourseTabContentProps> = ({ content, onCtaClick }) => {
  return (
    <>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.courses.map((course, courseIdx) => (
          <CourseCard 
            key={courseIdx} 
            title={course.title} 
            description={course.description} 
            tag={course.tag} 
          />
        ))}
      </div>

      {content.cta && (
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <a 
              href={content.cta.link} 
              onClick={onCtaClick}
            >
              {content.cta.text}
            </a>
          </Button>
        </div>
      )}
    </>
  );
};

export default CourseTabContent;
