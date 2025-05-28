// FooterButtons.js
import { Link } from 'react-router-dom';

import '../../styles/Footer.css';

const FooterButtons = () => {
  return (
    <div className="buttons">
      <Link to="/orders" className="btn2">Order Status <span>&gt;&gt;</span></Link>
      <Link to="/support/faq" className="btn2">FAQ <span>&gt;&gt;</span></Link>
      <Link to="/support/return-policy" className="btn2">Returns & Exchanges <span>&gt;&gt;</span></Link>
      <Link to="/support" className="btn2">Contact Us <span>&gt;&gt;</span></Link>
    </div>
  );
};

export default FooterButtons;
