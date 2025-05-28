import '../../styles/Products.css';

const FlashSale = () => {
  return (
    <section className="flash-sale">
      <div className="flash-sale-header">
        <div className="circle-background" />
        <h2>FLASH SALE<br />40% OFF</h2>
        <p className="discount-code">CODE: FLASHSALE40</p>
      </div>


      <img
        src="/Images/massager-front-view.png"
        alt="Neck Massager"
        className="flash-sale-image"
      />

      <div className="flash-sale-text">
        <h3> REVOLUTIONARY <br /><span className="highlight">NECK MASSAGER</span></h3>
        <p>Easy to use and ease tension & gain relief from neck, shoulder pain in minutes.</p>
        <button>Order Now!</button>
        <p className="validity-note">Discount valid for the next 24 hours only</p>
        
        <div className="down-arrow-svg">
        <img src="Images/double-down.png" />

        </div>

      </div>
    </section>
  );
};

export default FlashSale;
