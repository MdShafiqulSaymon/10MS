import React, { useState } from 'react';
import { Play, Star, Clock, Users, Award } from 'lucide-react';
import { useIELTSData } from '../hooks/useIELTSData';
const CourseHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { data, loading, error } = useIELTSData();
  const title = data?.data.title;
  const description = data?.data.description
  console.log(title, loading, error);
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {title || "IELTS Course by Munzereen Shahid"}
              </h1>
              <div className="flex items-center space-x-4 text-yellow-400">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white/80">(4.8 from 2,847 reviews)</span>
              </div>
            </div>

            {description ? (
              <div
                className="text-xl text-blue-100 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="text-xl text-blue-100 leading-relaxed">
                Master IELTS with comprehensive lessons, practice tests, and expert guidance.
                Get the score you need for your academic and professional goals.
              </p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Clock className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                <div className="text-sm font-medium">45+ Hours</div>
                <div className="text-xs text-blue-200">Content</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Users className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                <div className="text-sm font-medium">15,000+</div>
                <div className="text-xs text-blue-200">Students</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Award className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                <div className="text-sm font-medium">Band 7+</div>
                <div className="text-xs text-blue-200">Average</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <Star className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                <div className="text-sm font-medium">Lifetime</div>
                <div className="text-xs text-blue-200">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;