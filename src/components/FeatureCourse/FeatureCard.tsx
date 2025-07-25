import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionValue } from '../../types/types';

interface FeatureCardProps {
  feature: SectionValue;
  index: number;
  showImage?: boolean;
  customIcon?: React.ReactNode;
  className?: string;
  imageClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  feature, 
  index, 
  showImage = true,
  customIcon,
  className = "",
  imageClassName = ""
}) => {
  const defaultIcon = <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />;

  return (
    <div 
      className={`border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left content */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {feature.title || 'Feature'}
          </h3>
          
          <div className="space-y-4">
            {feature.checklist?.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-start space-x-3">
                {customIcon || defaultIcon}
                <span className="text-gray-700 leading-relaxed">
                  {item}
                </span>
              </div>
            )) || []}
          </div>
        </div>
        
        {/* Right image */}
        {showImage && feature.file_url && (
          <div className="lg:w-80 w-full flex-shrink-0">
            <img 
              src={feature.file_url}
              alt={feature.title || 'Course feature'}
              className={`w-full h-64 lg:h-48 object-cover rounded-lg shadow-lg ${imageClassName}`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;