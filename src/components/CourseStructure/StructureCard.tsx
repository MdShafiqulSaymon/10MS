import React from 'react';
import { SectionValue } from '../../types/types';

interface StructureCardProps {
  item: SectionValue;
  index: number;
  getBackgroundColor?: (index: number) => string;
  className?: string;
}

const StructureCard: React.FC<StructureCardProps> = ({ 
  item, 
  index, 
  getBackgroundColor,
  className = ""
}) => {
  const defaultGetBackgroundColor = (index: number): string => {
    const colors = [
      'bg-green-500', // Video lectures - green
      'bg-blue-500',  // Lecture sheets - blue  
      'bg-orange-500', // Mock tests - orange
      'bg-red-500'    // Live class - red
    ];
    return colors[index % colors.length];
  };

  const backgroundColorFunction = getBackgroundColor || defaultGetBackgroundColor;

  return (
    <div 
      className={`bg-gray-900 rounded-lg p-6 text-white hover:transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="flex items-start space-x-4">
        {/* Icon container */}
        <div className={`${backgroundColorFunction(index)} rounded-full p-2 flex-shrink-0`}>
          {item.icon ? (
            <img 
              src={item.icon} 
              alt={item.title || 'Course feature'}
              className="w-8 h-8 object-contain"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                // Fallback to a simple circle if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
          ) : (
            <div className="w-8 h-8 bg-white rounded-full opacity-80" />
          )}
          <div 
            className="w-8 h-8 bg-white rounded-full opacity-80 hidden"
            style={{display: 'none'}}
          />
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-white">
            {item.title || 'Untitled'}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {item.subtitle || ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StructureCard;