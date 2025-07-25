import React from 'react';
import { Section } from '../../types/types';
import LearnItem from './LearnItem';
import EmptyState from '../Common/EmptyState';
import { GraduationCap } from 'lucide-react';

interface WhatYouLearnProps {
  courseData?: Section;
  title?: string;
  onRetry?: () => void;
  customIcon?: React.ReactNode;
  containerClassName?: string;
  itemClassName?: string;
}

const WhatYouLearn: React.FC<WhatYouLearnProps> = ({ 
  courseData, 
  title,
  onRetry,
  customIcon,
  containerClassName = "",
  itemClassName = ""
}) => {
  // Empty state - no courseData provided or no values
  if (!courseData || !courseData.values || courseData.values.length === 0) {
    const isNoData = !courseData;
    
    return (
      <EmptyState
        title={isNoData ? "Learning Content Not Available" : "No Learning Items Available"}
        description={
          isNoData 
            ? "We couldn't load the learning content. Please try again later."
            : "This course doesn't have any learning items configured yet."
        }
        icon={<GraduationCap className="w-12 h-12 text-gray-400" />}
        action={isNoData && onRetry ? (
          <button
            onClick={onRetry}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        ) : undefined}
        className={containerClassName}
      />
    );
  }

  const displayTitle = title || courseData.name;

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 ${containerClassName}`}>
      {displayTitle && (
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          {displayTitle}
        </h2>
      )}
      
      <div className="bg-white rounded-2xl p-8">
        <div className="grid grid-cols-1 gap-4">
          {courseData.values.map((item, index) => (
            <LearnItem
              key={item.id || index}
              item={item}
              index={index}
              icon={customIcon}
              className={itemClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatYouLearn;