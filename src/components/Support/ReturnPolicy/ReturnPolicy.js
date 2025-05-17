import React from 'react';
import FooterButtons from '../../Footer/FooterButtons';
import LogoBottom from '../../Footer/LogoBottom';
import Navbar from '../../Navbar';

const ReturnPolicy = () => {

    return(
    <>
    <Navbar/>
    <div className="return-policy">
        <h1>Return Policy</h1>
        <p>Thank you for your purchase. We hope you are happy with your item. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund, store credit, or an exchange.  Please see below for more information on our return policy.</p>

        <h2>Returns</h2>
        
        <p> All returns must be postmarked within seven (7) days of the purchase date. All returned items must be in new and unused condition, with all original tags and labels attached.        </p>

        <h2>Return process</h2>
        
        <p>        To turn an item, please email customer service at returns@relaxio.ca to obtain a Return Merchandise Authorization (RMA) number and the address. After receiving a RMA number, place the item securely in its original packaging and the return form provided, then mail your return to the given address.
        You may also use the prepaid shipping label enclosed with your package. Return shipping charges will be paid or reimbursed by us.</p>
            
        <h2>Refunds</h2>

        <p>After receiving your return and inspecting the condition of your item, we will process your return or exchange. Please allow at least ten (10) days from the receipt of your item to process your return or exchange. Refunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. We will notify you by email when your return has been processed.</p>

        <h2>Exceptions</h2>

        <p>Sale items are FINAL SALE and cannot be returned.</p>
            
        <h2>Questions</h2>

        <p>If you have any questions concerning our return policy, please contact our Customer Support</p>
    
    
    
    </div>
    <FooterButtons/>
    <LogoBottom/>
    
    </>
    );
};

export default ReturnPolicy;