import React, { useState } from 'react';
import { Section } from '../../types/types';
import AccordionItem from '../Common/AccordionItem';
import EmptyState from '../Common/EmptyState';
import { BookOpen } from 'lucide-react';

interface CourseDetailsProps {
  courseData?: Section;
  onRetry?: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ 
  courseData, 
  onRetry 
}) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to strip HTML tags and decode entities
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Empty state - no courseData provided or no values
  if (!courseData || !courseData.values || courseData.values.length === 0) {
    const isNoData = !courseData;
    
    return (
      <EmptyState
        title={isNoData ? "Course Details Not Available" : "No Course Sections Available"}
        description={
          isNoData 
            ? "We couldn't load the course details. Please try again later."
            : "This course doesn't have any sections configured yet."
        }
        icon={<BookOpen className="w-12 h-12 text-gray-400" />}
        action={isNoData && onRetry ? (
          <button
            onClick={onRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        ) : undefined}
      />
    );
  }

  // Main content rendering
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {courseData.name || 'Course Details'}
      </h2>
      
      <div className="space-y-4">
        {courseData.values.map((item, index) => {
          const sectionId = item.id || `section-${index}`;
          const isOpen = openSections[sectionId];
          const title = stripHtml(item.title || '');
          const description = item.description || '';

          return (
            <AccordionItem
              key={sectionId}
              title={title}
              content={description}
              isOpen={isOpen}
              onToggle={() => toggleSection(sectionId)}
              renderAsHtml={false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetails;