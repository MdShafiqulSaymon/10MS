import React from 'react';
import { Check, Clock, Download, AlignCenterVertical as Certificate, Users, Globe, BookOpen, AlertTriangle } from 'lucide-react';
import VideoPlay from './VideoPlay';
import { useIELTSData } from '../hooks/useIELTSData';
import EmptyState from './Common/EmptyState'; // Adjust the import path as needed

const CourseInfo = () => {
  const { data, loading, error } = useIELTSData();
  const features = data?.data.checklist;
  const mediaData = data?.data.media;
  const cta = data?.data.cta_text;
  // Handle error state with EmptyState
  if (error) {
    return (
      <div className='rounded-2xl sticky -top-32'>
        <EmptyState
          title="Failed to Load Course Information"
          description="We couldn't load the course details at the moment. Please check your connection and try refreshing the page."
          icon={<AlertTriangle className="w-12 h-12 text-red-400" />}
          action={
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Try Again
            </button>
          }
          className="border border-red-200 bg-red-50"
        />
      </div>
    );
  }

  // Handle empty data state with EmptyState
  if (!data || !data.data) {
    return (
      <div className='rounded-2xl sticky -top-32'>
        <EmptyState
          title="Course Information Unavailable"
          description="Course details are not available at the moment. Please contact support or try again later."
          icon={<BookOpen className="w-12 h-12 text-gray-400" />}
          action={
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Refresh
            </button>
          }
        />
      </div>
    );
  }

  return (
    <div className='rounded-2xl sticky -top-32'>
      {/* Pass media data to VideoPlay component */}
      <VideoPlay mediaData={mediaData} />
      
      <div className="bg-white shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-baseline space-x-2 mb-2">
            <span className="text-3xl font-bold text-gray-900">৳2,500</span>
            <span className="text-lg text-gray-500 line-through">৳5,000</span>
            <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">50% OFF</span>
          </div>
          <p className="text-gray-600">One-time payment • Lifetime access</p>
        </div>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors mb-4">
          {cta?.name || "Enroll Now"}
        </button>

        <button className="w-full border border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 font-semibold py-3 px-6 rounded-xl transition-colors mb-6">
          Add to Cart
        </button>

        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-gray-900">What's in this course</h3>
          <ul className="space-y-3">
            {features && features.length > 0 ? (
              features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature.text}</span>
                </li>
              ))
            ) : (
              // Fallback if no features available
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Comprehensive course content</span>
              </li>
            )}
          </ul>
        </div>

        <div className="border-t pt-6 space-y-4">
          <div className="flex items-center space-x-3 text-gray-600">
            <Users className="w-5 h-5" />
            <span className="text-sm">15,247 students enrolled</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Globe className="w-5 h-5" />
            <span className="text-sm">Available in English & Bangla</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Certificate className="w-5 h-5" />
            <span className="text-sm">Certificate upon completion</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Download className="w-5 h-5" />
            <span className="text-sm">Downloadable resources</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;