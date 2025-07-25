import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionValue } from '../../types/types';

interface LearnItemProps {
  item: SectionValue;
  index: number;
  icon?: React.ReactNode;
  className?: string;
}

const LearnItem: React.FC<LearnItemProps> = ({ 
  item, 
  index, 
  icon,
  className = ""
}) => {
  const defaultIcon = <CheckCircle className="w-5 h-5 text-green-600" />;
  
  return (
    <div 
      className={`flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors ${className}`}
    >
      <div className="flex-shrink-0 mt-1">
        {icon || defaultIcon}
      </div>
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed">
          {item.text || item.title || ''}
        </p>
      </div>
    </div>
  );
};

export default LearnItem;