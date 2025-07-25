import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  title?: string;
  content: string | React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
  contentClassName?: string;
  renderAsHtml?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  content, 
  isOpen, 
  onToggle,
  className = '',
  contentClassName = '',
  renderAsHtml = false
}) => {
  // Function to clean HTML from text
  const cleanHtmlFromText = (htmlText: string) => {
    if (typeof htmlText !== 'string') return '';
    return htmlText
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
      .replace(/&amp;/g, '&') // Replace &amp; with &
      .replace(/&lt;/g, '<') // Replace &lt; with <
      .replace(/&gt;/g, '>') // Replace &gt; with >
      .trim();
  };

  // Function to parse HTML content and render it properly for course details
  const renderCourseContent = (htmlContent: string) => {
    if (typeof htmlContent !== 'string') return '';
    
    const content = htmlContent
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n\n')
      .replace(/<p>/gi, '')
      .replace(/<\/li>/gi, '')
      .replace(/<li>/gi, '• ')
      .replace(/<ul>/gi, '')
      .replace(/<\/ul>/gi, '')
      .replace(/<a[^>]*>/gi, '')
      .replace(/<\/a>/gi, '')
      .replace(/<[^>]*>/gi, ''); // Remove any remaining HTML tags

    return content.trim();
  };

  const renderContent = () => {
    if (typeof content === 'string') {
      if (renderAsHtml) {
        // For FAQ items that need HTML rendering
        return (
          <div 
            className={`text-gray-600 leading-relaxed ${contentClassName}`}
            dangerouslySetInnerHTML={{ 
              __html: content || cleanHtmlFromText(content) 
            }}
          />
        );
      } else {
        // For course details that need structured text rendering
        const processedContent = renderCourseContent(content);
        return (
          <div className={`text-gray-700 leading-relaxed whitespace-pre-line ${contentClassName}`}>
            {processedContent.split('\n').map((line, lineIndex) => {
              if (line.trim().startsWith('•')) {
                return (
                  <div key={lineIndex} className="flex items-start mb-2">
                    <span className="text-gray-400 mr-2">•</span>
                    <span>{line.trim().substring(1).trim()}</span>
                  </div>
                );
              }
              return line.trim() ? (
                <p key={lineIndex} className="mb-3">
                  {line.trim()}
                </p>
              ) : null;
            })}
          </div>
        );
      }
    }
    
    // For React node content
    return <div className={contentClassName}>{content}</div>;
  };

  return (
    <div className={`border border-gray-200 rounded-xl overflow-hidden ${className}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-semibold text-gray-900 pr-4">
          {title || 'Untitled'}
        </h3>
        {isOpen ? 
          <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" /> :
          <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
        }
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;