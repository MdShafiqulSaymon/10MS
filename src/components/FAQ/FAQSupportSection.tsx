import React from 'react';

interface FAQSupportSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onContactClick?: () => void;
}

const FAQSupportSection: React.FC<FAQSupportSectionProps> = ({
  title = "Still have questions?",
  description = "Our support team is here to help you succeed.",
  buttonText = "Contact Support",
  onContactClick
}) => {
  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl">
      <h3 className="font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-blue-700 mb-4">{description}</p>
      <button 
        onClick={onContactClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FAQSupportSection;