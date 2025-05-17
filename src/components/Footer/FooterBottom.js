// FooterBottom.js
import React from 'react';


const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="logobottom">
        <img src="/Images/logoRelaxio.png" alt="Relaxio Logo" />
      </div>
      <p>
        © 2023 Relaxio. All Rights Reserved. Use of this website is subject
        to certain terms of use which constitute a legal agreement between
        you and Relaxio.
      </p>
      <div className="footer-a">
        <a href="#">Terms of Services</a>
        <p>|</p>
        <a href="#">Privacy & Security</a>
        <p>|</p>
        <a href="#">Accessibility Policy</a>
        <p>|</p>
        <a href="#">Site Map</a>
      </div>
    </div>
  );
};

export default FooterBottom;
