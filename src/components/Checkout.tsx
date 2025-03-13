import React from "react";
import "./Checkout.css";

const Checkout: React.FC = () => {
  return (
    <div className="checkout-container">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form>
          <label>First Name*</label>
          <input type="text" name="firstName" required />

          <label>Company Name</label>
          <input type="text" name="companyName" />

          <label>Street Address*</label>
          <input type="text" name="streetAddress" required />

          <label>Apartment, floor, etc. (optional)</label>
          <input type="text" name="apartment" />

          <label>Town/City*</label>
          <input type="text" name="city" required />

          <label>Phone Number*</label>
          <input type="text" name="phoneNumber" required />

          <label>Email Address*</label>
          <input type="email" name="email" required />

          <div className="save-info">
            <input type="checkbox" name="saveInfo" />
            <label>Save this information for faster check-out next time</label>
          </div>
        </form>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="order-item">
          <img src="path/to/lcd-monitor.jpg" alt="LCD Monitor" />
          <span>LCD Monitor</span>
          <span>$650</span>
        </div>
        <div className="order-item">
          <img src="path/to/gamepad.jpg" alt="Gamepad" />
          <span>HI Gamepad</span>
          <span>$1100</span>
        </div>
        <div className="order-total">
          <span>Subtotal:</span>
          <span>$1750</span>
        </div>
        <div className="order-total">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="order-total">
          <span>Total:</span>
          <span>$1750</span>
        </div>
        <div className="payment-method">
          <label>
            <input type="radio" name="payment" value="bank" />
            Bank
          </label>
          <label>
            <input type="radio" name="payment" value="cash" />
            Cash on delivery
          </label>
        </div>
        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <button className="place-order">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
