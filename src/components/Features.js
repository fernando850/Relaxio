import React, { useState, useRef } from "react";
import "../styles/Features.css";

const featureItems = [
    { title: "5 modes", icon: "/Images/5modesIcon.png", detail: "/Images/5modesImage.png" },
    { title: "Lightweight", icon: "/Images/featherIcon.png", detail: "/Images/lightWeightImage.png" },
    { title: "Heating", icon: "/Images/termometerIcon.png", detail: "/Images/heatingImage.png" },
    { title: "Intensity", icon: "/Images/colorModeIntensityIcon.png", detail: "/Images/intensityImage.png" },
    { title: "Battery", icon: "/Images/batteryIcon.png", detail: "/Images/batteryImage.png" }
];

const Features = () => {
    const [selected, setSelected] = useState(null); // Start with no card selected
    const cardsRef = useRef(null); // To control the cards scroll

    const handleCardClick = (index) => {
        setSelected(index);
    };

    const handlePrev = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollBy({
                left: -100,
                behavior: "smooth",
            });
        }
    };

    const handleNext = () => {
        if (cardsRef.current) {
            cardsRef.current.scrollBy({
                left: 100,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="features-section">

            <div className="features-header">
                <h2>FEATURES</h2>
                <p>Relieve the tension from your neck</p>
            </div>

            <div className="features-carousel">

                {/* Correct left arrow text */}
                <button className="arrow left" onClick={handlePrev}>‹</button>

                <div className="features-cards" ref={cardsRef}>
                    {featureItems.map((item, index) => (
                        <div 
                            key={index}
                            className={`feature-card ${selected === index ? "active" : ""}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img src={item.icon} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>

                <button className="arrow right" onClick={handleNext}>›</button>

            </div>

            {/* Only show the detail image AFTER a card is clicked */}
            {selected !== null && (
                <div className="feature-detail">
                    <img src={featureItems[selected].detail} alt={featureItems[selected].title} />
                </div>
            )}

        </section>
    );
};

export default Features;
