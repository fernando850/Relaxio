import React, { useState } from 'react';
import Navbar from '../../Navbar';
import '../../../styles/Faq.css'; 
import FooterButtons from '../../Footer/FooterButtons';
import LogoBottom from '../../Footer/LogoBottom';
import { Link } from 'react-router-dom';
const faqData = [
  {
    question: 'When will my order be shipped?',
    answer: 'Orders are typically shipped within 1-2 business days after payment confirmation.'
  },
  {
    question: 'What are the shipping rates?',
    answer: 'Shipping rates depend on your location and will be calculated at checkout.'
  },
  {
    question: 'How do I track my package?',
    answer: 'You will receive a tracking link via email once your order has shipped.'
  },
  {
    question: 'Can I refuse my package if it is damaged?',
    answer: 'Yes, please refuse delivery and contact our support immediately.'
  },
  {
    question: 'Can I cancel my order?',
    answer: 'Orders can be canceled within 2 hours of placement by contacting our support.'
  },
  {
    question: 'Which credit cards are accepted?',
    answer: 'We accept Visa, Mastercard, American Express, and Discover.'
  },
  {
    question: 'Which payment methods are accepted?',
    answer: 'We accept credit/debit cards, PayPal, and Apple Pay.'
  },
  {
    question: 'What is included on the product package?',
    answer: 'Each package includes the massager, charging cable, user manual, and warranty card.'
  },
  {
    question: 'Is the neck massager waterproof?',
    answer: 'The neck massager is water-resistant but not fully waterproof. Avoid submerging it.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      <Navbar />
      
      <div className="faq-page">
        <p className="breadcrumb">
          <Link to="/support" className="breadcrumb-link">Support</Link>
          <span className="breadcrumb-current"> &gt; Order Status</span>
        </p>
        <div className="faq-container">
          <h2>FAQ</h2>
          <ul className="faq-list">
            {faqData.map((faq, index) => (
              <li key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span>{faq.question}</span>
                {openIndex !== index && (
                  <span className="arrow">{'>>'}</span>
                )}
              </div>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </li>
            
            ))}
          </ul>
        </div>
        <FooterButtons />
      </div>
      <LogoBottom />
    </>
  );
};

export default FAQ;
