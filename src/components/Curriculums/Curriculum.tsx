import React, { useState } from 'react';
import ModuleItem from './ModuleItem';

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

interface CurriculumProps {
  modules?: Module[];
}

const Curriculum: React.FC<CurriculumProps> = ({ modules: propModules }) => {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const defaultModules: Module[] = [
    {
      title: "Introduction to IELTS",
      duration: "2h 30m",
      lessons: [
        { title: "IELTS Overview and Format", type: "video", duration: "15m" },
        { title: "Test Registration Process", type: "video", duration: "10m" },
        { title: "Scoring System Explained", type: "video", duration: "20m" },
        { title: "Study Plan Template", type: "resource", duration: "5m" }
      ]
    },
    {
      title: "Listening Module",
      duration: "8h 45m",
      lessons: [
        { title: "Listening Strategies", type: "video", duration: "25m" },
        { title: "Note-taking Techniques", type: "video", duration: "20m" },
        { title: "Practice Test 1", type: "test", duration: "30m" },
        { title: "Common Mistakes Analysis", type: "video", duration: "15m" }
      ]
    },
    {
      title: "Reading Module",
      duration: "10h 15m",
      lessons: [
        { title: "Reading Strategies", type: "video", duration: "30m" },
        { title: "Skimming and Scanning", type: "video", duration: "25m" },
        { title: "Academic Reading Practice", type: "test", duration: "60m" },
        { title: "Time Management Tips", type: "video", duration: "20m" }
      ]
    },
    {
      title: "Writing Module",
      duration: "12h 30m",
      lessons: [
        { title: "Task 1: Academic Writing", type: "video", duration: "45m" },
        { title: "Task 2: Essay Writing", type: "video", duration: "50m" },
        { title: "Sample Essays Analysis", type: "resource", duration: "30m" },
        { title: "Writing Practice Sessions", type: "test", duration: "90m" }
      ]
    },
    {
      title: "Speaking Module",
      duration: "6h 20m",
      lessons: [
        { title: "Speaking Test Format", type: "video", duration: "20m" },
        { title: "Part 1: Introduction", type: "video", duration: "25m" },
        { title: "Part 2: Individual Talk", type: "video", duration: "35m" },
        { title: "Part 3: Discussion", type: "video", duration: "30m" }
      ]
    }
  ];

  const modules = propModules || defaultModules;

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
      
      <div className="space-y-4">
        {modules.map((module, index) => (
          <ModuleItem
            key={index}
            module={module}
            index={index}
            isExpanded={expandedModules.includes(index)}
            onToggle={toggleModule}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-blue-900">Total Course Duration</p>
            <p className="text-blue-700">40+ hours of comprehensive content</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-blue-900">25 Modules</p>
            <p className="text-blue-700">100+ lessons</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;