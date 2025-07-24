// components/FaqAccordion.jsx
import { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import './FaqAccordion.scss'; // Стилі підключимо окремо

const FaqAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq-list">
        {items.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <span>{item.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;