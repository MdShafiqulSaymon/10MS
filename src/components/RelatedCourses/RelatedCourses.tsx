import React from 'react';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { CourseData } from '../../types/types';
import CourseCard from './CourseCard';
import EmptyState from '../Common/EmptyState'; // Adjust the import path as needed

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

interface RelatedCoursesProps {
  courses?: Course[];
}

const RelatedCourses: React.FC<RelatedCoursesProps> = ({ courses: propCourses }) => {
  const defaultCourses: Course[] = [
    {
      id: 1,
      title: "IELTS Speaking Masterclass",
      instructor: "Sarah Johnson",
      rating: 4.7,
      students: 3420,
      duration: "8h 30m",
      price: "৳1,500",
      originalPrice: "৳3,000",
      image: "https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg"
    },
    {
      id: 2,
      title: "Academic English Writing",
      instructor: "David Miller",
      rating: 4.6,
      students: 2150,
      duration: "12h 15m",
      price: "৳2,000",
      originalPrice: "৳4,000",
      image: "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg"
    },
    {
      id: 3,
      title: "English Grammar Complete",
      instructor: "Emma Wilson",
      rating: 4.8,
      students: 5670,
      duration: "15h 45m",
      price: "৳1,800",
      originalPrice: "৳3,600",
      image: "https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg"
    },
    {
      id: 4,
      title: "TOEFL Preparation Course",
      instructor: "Michael Brown",
      rating: 4.5,
      students: 1890,
      duration: "25h 30m",
      price: "৳3,000",
      originalPrice: "৳6,000",
      image: "https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg"
    }
  ];

  const courses = propCourses || defaultCourses;

  const handleEnroll = (course: Course): void => {
    console.log(`Enrolling in: ${course.title}`);
    // Handle enrollment logic here
  };

  // Show empty state when no courses are available
  if (!courses || courses.length === 0) {
    return (
      <EmptyState
        title="No Related Courses Available"
        description="We couldn't find any related courses at the moment. Check back later for course recommendations based on your interests."
        icon={<BookOpen className="w-12 h-12 text-gray-400" />}
      />
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Courses You Might Like</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard 
            key={course.id}
            course={course}
            onEnroll={handleEnroll}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedCourses;