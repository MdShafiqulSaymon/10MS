import React from 'react';

interface FreePDFSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
  onDownloadClick?: () => void;
  showImage?: boolean;
  className?: string;
}

const FreePDFSection: React.FC<FreePDFSectionProps> = ({
  title = "Free PDF",
  subtitle = "IELTS Confirm 7+ Score (Guideline)",
  description = "Learn the best strategies for scoring well in IELTS with the best guides.",
  buttonText = "Download Free PDF",
  imageUrl = "https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg",
  imageAlt = "IELTS Course Thumbnail",
  onDownloadClick,
  showImage = true,
  className = ""
}) => {
  return (
    <div className={`mt-8 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-lg p-8 relative overflow-hidden ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-orange-500 rounded-full p-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-orange-500 font-bold text-sm">PDF</span>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold">{title}</h3>
          </div>
          
          <h4 className="text-white text-xl font-semibold mb-3">
            {subtitle}
          </h4>
          
          <p className="text-gray-300 text-base mb-6 max-w-md">
            {description}
          </p>
          
          <button 
            onClick={onDownloadClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            {buttonText}
          </button>
        </div>
        
        {/* Right side image */}
        {showImage && (
          <div className="hidden md:block flex-shrink-0 ml-8">
            <img 
              src={imageUrl}
              alt={imageAlt}
              className="w-80 h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FreePDFSection;