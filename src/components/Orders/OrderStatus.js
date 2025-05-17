import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/OrderStatus.css';

const OrderStatus = () => {
  return (
    <div className="order-status-container">
      <p className="breadcrumb">
        <Link to="/support" className="breadcrumb-link">Support</Link>
        <span className="breadcrumb-current"> &gt; Order Status</span>
      </p>

      <h2 className="order-title">Order Status</h2>
      <form className="order-form">
        <label htmlFor="order-number">Order number:*</label>
        <input type="text" id="order-number" name="order-number" />

        <label htmlFor="email">Email:*</label>
        <input type="email" id="email" name="email" />

    <div className='shipButtonContainer'>
        <button type="submit">Track Shipment</button>
    </div>
        
      </form>
    </div>
  );
};

export default OrderStatus;
