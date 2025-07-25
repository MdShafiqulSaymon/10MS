import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LessonItem from './LeassonItem';

interface Lesson {
  title: string;
  type: string;
  duration: string;
}

interface Module {
  title: string;
  duration: string;
  lessons: Lesson[];
}

interface ModuleItemProps {
  module: Module;
  index: number;
  isExpanded: boolean;
  onToggle: (index: number) => void;
}

const ModuleItem: React.FC<ModuleItemProps> = ({ 
  module, 
  index, 
  isExpanded, 
  onToggle 
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center space-x-4">
          {isExpanded ? 
            <ChevronDown className="w-5 h-5 text-gray-600" /> :
            <ChevronRight className="w-5 h-5 text-gray-600" />
          }
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{module.title}</h3>
            <p className="text-sm text-gray-600">
              {module.lessons.length} lessons • {module.duration}
            </p>
          </div>
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          Module {index + 1}
        </div>
      </button>
      
      {isExpanded && (
        <div className="p-6 pt-0">
          <div className="space-y-3">
            {module.lessons.map((lesson, lessonIndex) => (
              <LessonItem 
                key={lessonIndex}
                lesson={lesson}
                index={lessonIndex}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleItem;