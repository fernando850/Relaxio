import React from 'react';
import '../styles/SupportSection.css';
import { Link } from 'react-router-dom';

const SupportSection = () => {
    return (
    <div className="support-container colorF1F8FE">
      <div className="contactsupport">
        <h4>Need help?</h4>
        <a href="/support">Contact our Customer Support Team</a>
      </div>

      <div className="socialmedia-icons">
        <a href="https://www.facebook.com"><img src="/Images/facebookIcon.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com"><img src="/Images/instagramIcon.png" alt="Instagram" /></a>
        <a href="https://www.twitter.com"><img src="/Images/twitterIcon.png" alt="Twitter" /></a>
        <a href="https://www.youtube.com"><img src="/Images/youtubeIcon.png" alt="YouTube" /></a>
      </div>
    </div>
  );
};

export default SupportSection;