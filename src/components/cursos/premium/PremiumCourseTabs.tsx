
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CourseCategory from './CourseCategory';
import { premiumCourseCategories } from './courseCategoriesData';

const PremiumCourseTabs: React.FC = () => {
  return (
    <Tabs defaultValue={premiumCourseCategories[0].id} className="w-full">
      <TabsList className="w-full flex space-x-4 bg-transparent mb-8">
        {premiumCourseCategories.map(category => (
          <TabsTrigger 
            key={category.id} 
            value={category.id}
            className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white py-3"
          >
            {category.title}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {premiumCourseCategories.map(category => (
        <TabsContent key={category.id} value={category.id} className="animate-fade-in">
          <CourseCategory category={category} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default PremiumCourseTabs;
