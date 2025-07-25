import React from 'react';
import { Play, FileText, Clock } from 'lucide-react';

interface Lesson {
  title: string;
  type: string;
  duration: string;
}

interface LessonItemProps {
  lesson: Lesson;
  index: number;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, index }) => {
  const getIcon = (type: string) => {
    switch(type) {
      case 'video': return <Play className="w-4 h-4 text-blue-600" />;
      case 'resource': return <FileText className="w-4 h-4 text-green-600" />;
      case 'test': return <Clock className="w-4 h-4 text-orange-600" />;
      default: return <Play className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
      <div className="flex items-center space-x-3">
        {getIcon(lesson.type)}
        <span className="text-gray-700">{lesson.title}</span>
      </div>
      <span className="text-sm text-gray-500">{lesson.duration}</span>
    </div>
  );
};

export default LessonItem;