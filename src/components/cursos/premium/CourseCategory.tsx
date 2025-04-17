
import React from 'react';
import { Play } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  videoId: string;
}

interface CourseCategoryProps {
  category: {
    id: string;
    title: string;
    playlistId: string;
    courses: Course[];
  };
}

const CourseCategory: React.FC<CourseCategoryProps> = ({ category }) => {
  return (
    <>
      <div className="bg-slate-800/50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
        <p className="text-gray-300 mb-4">Playlist completa con todo nuestro contenido premium para esta categoría.</p>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/videoseries?list=${category.playlistId}`}
            title={category.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Play className="h-5 w-5 text-orange-500" />
        Cursos Destacados
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.courses.map((course, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${course.videoId}`}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{course.title}</h4>
              <p className="text-gray-300 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseCategory;
