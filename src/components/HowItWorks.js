import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
    return (
      <div className="how-it-works">
        <div className="main-bottom-toptext">
          <h2>How does it Work?</h2>
          <p>Long distance driving, bad posture, stress and bad sleeping position can cause pain and discomfort on the neck. Our new neck massager can relieve neck aches by deep stimulation and low frequency vibrations.</p>
          <p>The most common uses are to relieve soreness, humpbacked, stiffness and tension. The relaxation provided by the Neck Massager can be a good ally in your daily life.</p>
        </div>
  
        <div className="video">
          <iframe 
            src="https://www.youtube.com/embed/kdldwEnttSM?si=gOZTOxLeo6zZ2GD2" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  export default HowItWorks;