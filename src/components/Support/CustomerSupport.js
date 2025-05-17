import React, { useState } from 'react';

import VirtualAssistant from './VirtualAssistant';

import { useNavigate } from 'react-router-dom';




const supportItems = [
    { label: 'Order Status', icon: '/Images/trolley.png' },
    { label: 'Live Chat', icon: '/Images/multiple-messages.png' },
    { label: 'Email Us', icon: '/Images/messaging.png' },
    { label: 'Return Policy', icon: 'Images/return-purchase.png' },
    { label: 'FAQ', icon: '/Images/help.png' },
    { label: 'Your Account', icon: '/Images/userIcon.png' },
  ];

  const CustomerSupport = () => {

  const [showAssistant, setShowAssistant] = useState(false);

  const navigate = useNavigate();

  const handleClick = (label) => {
    if (label === 'Order Status') {
      navigate('/orders');
    }
    if (label === 'Return Policy') {
      navigate('/support/return-policy');
    }
    if (label === 'FAQ') {
      navigate('/support/faq');
    }
    if (label === 'Your Account') {
      navigate('/signin');
    }
    if (label === 'Email Us') {
    // Open user's default mail app
      window.location.href = 'mailto:support@relaxio.com?subject=Customer%20Support&body=Hello%20Relaxio%20team,';
    }
    if (label === 'Live Chat') {
      setShowAssistant(true);
    }

    
  };

    return (
      <div className="customer-support">
        <h2>Customer Support</h2>
        <div className="support-grid">
          {supportItems.map((item, index) => (
            <div 
              key={index} 
              className="support-card" 
              onClick={() => handleClick(item.label)}
            >
                <img src={item.icon} alt={item.label} className="icon" />
                <div className="label">{item.label}</div>
            </div>
          ))}
        </div>
        {/* Virtual Assistant overlay */}
        {showAssistant && (
          <VirtualAssistant onClose={() => setShowAssistant(false)} />
        )}
      </div>
    );
  };
  
  export default CustomerSupport;