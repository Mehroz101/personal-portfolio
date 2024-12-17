import React from "react";
import "../styles/PricingCard.css"; // Importing the CSS file
const PricingCard = ({price,pricevalue}) => {
  return (
    <div className="pricing-container">
      <div className="pricing-card pro-card">
        <div className="card-header">
          <div className="card-title">Rs</div>
          <div className="price">
            <h2>{price}</h2>
          </div>
        </div>
        {pricevalue?.map((value,index)=>{
          return (
            <>
            <div className="feature">
            <svg
              width="24"
              height="24"
              fill="none"
              className="icon"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
              ></path>
            </svg>
            <p style={{textAlign:"left" , margin:"0"}}>
            {value}
            </p>
            </div>
            </>
          )
        })}
       
       
        <div className="card-footer">
          <button className="btn">Contact me</button>
          <div className="description">
            Literally you probably haven't heard about this deal.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
