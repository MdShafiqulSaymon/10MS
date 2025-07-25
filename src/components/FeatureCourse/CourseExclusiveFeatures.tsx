import React from 'react';
import { Section } from '../../types/types';
import FeatureCard from './FeatureCard';

interface CourseExclusiveFeaturesProps {
  courseData?: Section;
  title?: string;
  showLoadingState?: boolean;
  showImages?: boolean;
  customIcon?: React.ReactNode;
  containerClassName?: string;
  cardClassName?: string;
  imageClassName?: string;
  loadingItemsCount?: number;
}

const CourseExclusiveFeatures: React.FC<CourseExclusiveFeaturesProps> = ({ 
  courseData,
  title,
  showLoadingState = true,
  showImages = true,
  customIcon,
  containerClassName = "",
  cardClassName = "",
  imageClassName = "",
  loadingItemsCount = 2
}) => {
  // Loading state
  if (!courseData && showLoadingState) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
          <div className="space-y-8">
            {[...Array(loadingItemsCount)].map((_, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
                    <div className="space-y-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
                      ))}
                    </div>
                  </div>
                  {showImages && (
                    <div className="w-64 h-40 bg-gray-300 rounded"></div>
                  )}
                </div>
              </div>
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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {displayTitle}
        </h2>
      )}
      
      <div className="space-y-8">
        {courseData.values?.map((feature, index) => (
          <FeatureCard
            key={feature.id || index}
            feature={feature}
            index={index}
            showImage={showImages}
            customIcon={customIcon}
            className={cardClassName}
            imageClassName={imageClassName}
          />
        )) || []}
      </div>
    </div>
  );
};

export default CourseExclusiveFeatures;