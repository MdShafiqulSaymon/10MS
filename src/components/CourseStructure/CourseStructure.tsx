import React from 'react';
import { Section } from '../../types/types';
import StructureCard from './StructureCard';
import FreePDFSection from './FreePDFSection';

interface CourseStructureProps {
  courseData?: Section;
  title?: string;
  showLoadingState?: boolean;
  showFreePDF?: boolean;
  customBackgroundColors?: (index: number) => string;
  containerClassName?: string;
  cardClassName?: string;
  freePDFProps?: {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    imageUrl?: string;
    imageAlt?: string;
    onDownloadClick?: () => void;
    showImage?: boolean;
    className?: string;
  };
  loadingItemsCount?: number;
}

const CourseStructure: React.FC<CourseStructureProps> = ({ 
  courseData,
  title,
  showLoadingState = true,
  showFreePDF = true,
  customBackgroundColors,
  containerClassName = "",
  cardClassName = "",
  freePDFProps = {},
  loadingItemsCount = 4
}) => {
  // Loading state
  if (!courseData && showLoadingState) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(loadingItemsCount)].map((_, index) => (
              <div key={index} className="bg-gray-300 rounded-lg h-32"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // If no data and loading state is disabled, return null
  if (!courseData) {
    return null;
  }

  const displayTitle = title || courseData.name;

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 ${containerClassName}`}>
      {displayTitle && (
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          {displayTitle}
        </h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courseData.values?.map((item, index) => (
          <StructureCard
            key={item.id || index}
            item={item}
            index={index}
            getBackgroundColor={customBackgroundColors}
            className={cardClassName}
          />
        )) || []}
      </div>
      
      {showFreePDF && <FreePDFSection {...freePDFProps} />}
    </div>
  );
};

export default CourseStructure;