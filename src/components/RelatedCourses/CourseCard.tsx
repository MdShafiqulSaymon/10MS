import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { CourseData } from '../../types/types';
// Course interface for the component
interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  originalPrice: string;
  image: string;
}

// Props interfaces
interface CourseCardProps {
  course: Course;
  onEnroll?: (course: Course) => void;
}

interface RelatedCoursesProps {
  courses?: Course[];
}
// CourseCard Component
const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="h-40 relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
        
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Users className="w-4 h-4" />
            <span className="text-sm">{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-900">{course.price}</span>
            <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
          </div>
          <button 
            onClick={() => onEnroll && onEnroll(course)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseCard