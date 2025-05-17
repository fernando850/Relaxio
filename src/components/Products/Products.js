
// ./components/Products/Products.js
import React from 'react';
import '../Navbar.js';
import '../Features.js';
import '../Footer/Footer.js';
import '../SupportSection.js';
import '../HowItWorks.js';
import Navbar from '../Navbar.js';
import Features from '../Features.js';
import HowItWorks from '../HowItWorks.js';
import SupportSection from '../SupportSection.js';
import FooterAppAds from '../Footer/FooterAppAds.js';
import FooterBottom from '../Footer/FooterBottom.js';
import FlashSale from './FlashSale.js';
import ProductShowcase from './ProductShowcase.js';

const Products = () => {

    return (
        <div>
            <Navbar />
            <FlashSale />
            <Features />
            <HowItWorks />
            <ProductShowcase />
            <SupportSection />
            <FooterAppAds/>
            <FooterBottom/>

        </div>

    );
        
}

export default Products;
