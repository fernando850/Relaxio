import React from 'react';
import FooterButtons from './FooterButtons';
import FooterAppAds from './FooterAppAds';
import FooterBottom from './FooterBottom';


const Footer = () => {
  return (
    <div className="footer">
      <FooterButtons />
      <FooterAppAds />
      <FooterBottom />
    </div>
  );
};

export default Footer;