import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title = "No Data Available",
  description = "There's no content to display at the moment.",
  icon,
  action,
  className = ""
}) => {
  const defaultIcon = icon || <FileText className="w-12 h-12 text-gray-400" />;

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 mb-8 ${className}`}>
      <div className="text-center py-12">
        <div className="flex justify-center mb-4">
          {defaultIcon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          {description}
        </p>
        {action && (
          <div className="flex justify-center">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState;