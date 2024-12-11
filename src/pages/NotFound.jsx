import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Optional CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home btn ">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
