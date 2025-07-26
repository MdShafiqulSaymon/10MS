import React, { useState } from 'react';
import { Play, Star, Clock, Users, Award, BookOpen } from 'lucide-react';
import { useIELTSData } from '../hooks/useIELTSData';
const CourseHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { data, loading, error } = useIELTSData();
  const title = data?.data.title;
  const description = data?.data.description
  console.log(title, loading, error);
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
    {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-indigo-600/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/10 to-orange-400/5 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-400/5 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-1 gap-0 items-center">
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
                className="text-xl text-blue-100 leading-relaxed w-2/3"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="text-xl text-blue-100 leading-relaxed w-2/3">
                Master IELTS with comprehensive lessons, practice tests, and expert guidance.
                Get the score you need for your academic and professional goals.
              </p>
            )}

            {/* Combined Actions and Features Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-6">
              <div className="space-y-4 flex-shrink-0">
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-yellow-400/25">
                    🎯 Start Learning Now
                  </button>
                  <button className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-200">
                    📚 View Curriculum
                  </button>
                </div>

                {/* Key features */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs font-medium border border-blue-400/30">
                    ✨ Interactive Lessons
                  </span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full text-xs font-medium border border-green-400/30">
                    🎯 Practice Tests
                  </span>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs font-medium border border-purple-400/30">
                    👨‍🏫 Expert Guidance
                  </span>
                </div>
              </div>
              {/* Right Content - Stats Grid */}
              <div className="w-full lg:w-auto lg:pl-8">
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                  <div className="text-center px-3 py-2 bg-gradient-to-br from-white/15 to-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <div className="text-sm sm:text-lg font-bold">45+ Hours Content</div>
                    </div>
                  </div>
                  <div className="text-center px-3 py-2 bg-gradient-to-br from-white/15 to-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
                    <Users className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <div className="text-sm sm:text-lg font-bold">15,000+ Students</div>
                    </div>
                  </div>
                  <div className="text-center px-3 py-2 bg-gradient-to-br from-white/15 to-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
                    <Award className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                    <div className="text-sm sm:text-lg font-bold">Band 7+ Score</div>
                    </div>
                  </div>
                  <div className="text-center px-3 py-2 bg-gradient-to-br from-white/15 to-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
                    <BookOpen className="w-5 h-5 text-purple-300 flex-shrink-0" />
                    <div className="text-sm sm:text-lg font-bold">Lifetime Access</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;