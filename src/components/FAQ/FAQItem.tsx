import React from 'react';
import { SectionValue } from '../../types/types';
import AccordionItem from '../Common/AccordionItem';

interface FAQItemProps {
  faq: SectionValue;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, index, isOpen, onToggle }) => {
  return (
    <AccordionItem
      title={faq.question || 'Question'}
      content={faq.answer || ''}
      isOpen={isOpen}
      onToggle={() => onToggle(index)}
      renderAsHtml={true}
    />
  );
};

export default FAQItem;