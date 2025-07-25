import React, { useState } from 'react';
import { Section } from '../../types/types';
import FAQItem from './FAQItem';
import FAQSupportSection from './FAQSupportSection';

interface FAQProps {
  faqData?: Section;
  showSupport?: boolean;
  onContactSupport?: () => void;
}

const FAQ: React.FC<FAQProps> = ({ 
  faqData, 
  showSupport = true, 
  onContactSupport 
}) => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  // Default FAQ data if no data is provided
  const defaultFaqs = [
    {
      question: "Is this course suitable for beginners?",
      answer: "Yes, this course is designed for students of all levels. We start with the basics and gradually build up to advanced strategies. Whether you're taking IELTS for the first time or looking to improve your score, this course will help you."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to the course content. Once you enroll, you can access all videos, resources, and materials forever. We also provide updates to the course content at no extra cost."
    },
    {
      question: "Are there practice tests included?",
      answer: "Yes, the course includes 4 full-length practice tests that simulate the actual IELTS exam. You'll also get detailed explanations for all answers and personalized feedback on your performance."
    },
    {
      question: "Can I get my writing assessed?",
      answer: "Absolutely! The course includes writing assessment services where our expert instructors will review your essays and provide detailed feedback with suggestions for improvement."
    },
    {
      question: "Is there any live support available?",
      answer: "Yes, we offer live doubt-clearing sessions every week where you can ask questions directly to the instructor. We also have a dedicated support team available 24/7 to help with any technical issues."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within 30 days of purchase, we'll provide a full refund, no questions asked."
    }
  ];

  // Use provided FAQ data or fall back to default
  const faqs = faqData?.values || defaultFaqs;

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Loading state if no data is provided
  if (!faqData || !faqData.values?.length) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        {faqData.name || 'Frequently Asked Questions'}
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={'id' in faq ? faq.id : index}
            faq={faq}
            index={index}
            isOpen={openItems.includes(index)}
            onToggle={toggleItem}
          />
        ))}
      </div>
      
      {showSupport && (
        <FAQSupportSection onContactClick={onContactSupport} />
      )}
    </div>
  );
};

export default FAQ;