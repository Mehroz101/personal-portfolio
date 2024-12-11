import React from "react";
import "../styles/PricingCard.css"; // Importing the CSS file

const PricingCard = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-card pro-card">
        <div className="card-header">
          <div className="card-title">PRO</div>
          <div className="price">
            <h2>$38</h2>
          </div>
        </div>
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
          Vexillologist pitchfork
        </div>
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
          Tumeric plaid portland
        </div>
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
          Hexagon neutra unicorn
        </div>
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
          Tumeric plaid portland
        </div>
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
          Mixtape chillwave tumeric
        </div>
        <div className="card-footer">
          <button className="btn">Button</button>
          <div className="description">
            Literally you probably haven't heard of them jean shorts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
