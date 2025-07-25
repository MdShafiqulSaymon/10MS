import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon, X } from 'lucide-react';
import EmptyState from './Common/EmptyState';

interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface VideoPlayProps {
  mediaData?: MediaItem[];
  onRetry?: () => void;
}

const VideoPlay: React.FC<VideoPlayProps> = ({ mediaData, onRetry }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const previewGalleryItems = mediaData?.filter(item => item.name === 'preview_gallery') || [];

  if (!mediaData || !mediaData.length || previewGalleryItems.length === 0) {
    const isNoData = !mediaData || !mediaData.length;

    return (
      <div className="relative">
        <EmptyState
          title={isNoData ? "Media Content Not Available" : "No Preview Media Available"}
          description={
            isNoData
              ? "We couldn't load the media content. Please try again later."
              : "This course doesn't have any preview media configured yet."
          }
          icon={<ImageIcon className="w-12 h-12 text-gray-400" />}
          action={isNoData && onRetry ? (
            <button
              onClick={onRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          ) : undefined}
          className="bg-gray-900 rounded-t-2xl"
        />
      </div>
    );
  }

  const currentMedia = previewGalleryItems[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? previewGalleryItems.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === previewGalleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const getThumbnailUrl = (item: MediaItem) => {
    if (item.thumbnail_url) return item.thumbnail_url;
    if (item.resource_type === 'image') return item.resource_value;
    return 'https://via.placeholder.com/640x360/1f2937/ffffff?text=Video+Thumbnail';
  };

  const getMediaTitle = (item: MediaItem, index: number) => {
    return item.resource_type === 'video'
      ? `Course Preview Video ${index + 1}`
      : `Course Image ${index + 1}`;
  };

  const isVideo = (item: MediaItem) => item.resource_type === 'video';

  const getYouTubeEmbedUrl = () =>
    "https://www.youtube.com/embed/zrlYnaZftEQ?autoplay=1&rel=0&modestbranding=1&showinfo=0";

  const handlePlayVideo = () => setIsVideoPlaying(true);
  const handleCloseVideo = () => setIsVideoPlaying(false);

  return (
    <div className="relative">
      <div className="relative bg-gray-900 overflow-hidden shadow-2xl rounded-t-2xl">
        <div className="aspect-video relative group">
          {/* Fixed YouTube Video Player */}
          {isVideoPlaying && (
            <>
              <iframe
                src={getYouTubeEmbedUrl()}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Course Preview Video"
              />
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Media Display (Thumbnail View) */}
          {!isVideoPlaying && (
            <div className="w-full h-full relative">
              <img
                src={getThumbnailUrl(currentMedia)}
                alt={getMediaTitle(currentMedia, currentIndex)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/640x360/1f2937/ffffff?text=Media+Error';
                }}
              />

              {/* Video Play Button */}
              <div
                className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="bg-black/50 rounded-full p-4 hover:bg-black/70 transition-colors">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Media Type Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${isVideo(currentMedia) ? 'bg-red-500' : 'bg-blue-500'} text-white`}>
                  {isVideo(currentMedia) ? 'Video' : 'Image'}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">
                  {getMediaTitle(currentMedia, currentIndex)}
                </h3>
              </div>
            </div>
          )}

          {/* Navigation */}
          {previewGalleryItems.length > 1 && !isVideoPlaying && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Previous media"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100"
                aria-label="Next media"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Counter */}
          {previewGalleryItems.length > 1 && !isVideoPlaying && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {previewGalleryItems.length}
            </div>
          )}
        </div>

        {/* Thumbnail Bar */}
        {previewGalleryItems.length > 1 && !isVideoPlaying && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
              {previewGalleryItems.map((media, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-white shadow-lg scale-110'
                      : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={getThumbnailUrl(media)}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/64x40/374151/ffffff?text=Error';
                    }}
                  />
                  {isVideo(media) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-3 h-3 text-white drop-shadow-lg" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dots Indicator for Small Screens */}
        {previewGalleryItems.length > 1 && !isVideoPlaying && (
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 md:hidden">
            <div className="flex space-x-2">
              {previewGalleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlay;
