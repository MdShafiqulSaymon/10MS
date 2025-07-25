import React from 'react';
import { Star, Users, Award, BookOpen, User } from 'lucide-react';
import { Section } from '../types/types';
import EmptyState from './Common/EmptyState'; // Adjust the import path as needed

interface InstructorProps {
  instructorData?: Section;
  isLoading?: boolean;
}

const Instructor: React.FC<InstructorProps> = ({ instructorData, isLoading = false }) => {
  // Empty state when no instructor data is available
  if (!instructorData || !instructorData.values?.length) {
    return (
      <EmptyState
        title="No Instructor Information"
        description="Instructor details are not available for this course at the moment. Please check back later or contact support if this issue persists."
        icon={<User className="w-12 h-12 text-gray-400" />}
      />
    );
  }

  const instructor = instructorData.values[0];

  // Parse HTML description to extract qualifications
  const parseDescription = (htmlDesc: string) => {
    // Remove HTML tags and split by line breaks
    const cleanDesc = htmlDesc.replace(/<[^>]*>/g, '\n').replace(/&nbsp;/g, ' ').trim();
    return cleanDesc.split('\n').filter(line => line.trim());
  };

  const qualifications = parseDescription(instructor.description || '');
  
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {instructorData.name || 'Course Instructor'}
      </h2>

      {/* Image and Instructor Details - Centered */}
      <div className='flex flex-row gap-10'>
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <img
              src={instructor.image || 'https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg'}
              alt={instructor.name || 'Instructor'}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/128x128/gray/white?text=No+Image';
              }}
            />
          </div>
        </div>

        {/* Qualifications */}
        <div className='text-center flex flex-col'>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {instructor.name || 'Instructor Name'}
          </h3>
          <p className="text-blue-600 font-medium">
            {instructor.short_description || 'Course Instructor'}
          </p>

          <div className="mb-6">
            {qualifications.length > 0 ? (
              <div className="text-gray-600 leading-relaxed text-center">
                {qualifications.map((qualification, index) => (
                  <p key={index} className="mb-1">
                    {qualification}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 leading-relaxed text-center">
                Experienced instructor with expertise in course delivery and student success.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
          <div className="font-semibold text-gray-900">10,000+</div>
          <div className="text-sm text-gray-600">Students</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Star className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
          <div className="font-semibold text-gray-900">4.9/5</div>
          <div className="text-sm text-gray-600">Rating</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <BookOpen className="w-6 h-6 mx-auto mb-2 text-green-600" />
          <div className="font-semibold text-gray-900">15</div>
          <div className="text-sm text-gray-600">Courses</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <Award className="w-6 h-6 mx-auto mb-2 text-purple-600" />
          <div className="font-semibold text-gray-900">8+ Years</div>
          <div className="text-sm text-gray-600">Experience</div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;