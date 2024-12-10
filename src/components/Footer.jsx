import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="stylediv"></div>
        <div className="top">
          <h1>MOJI</h1>
          <div className="social_links">
            <Link to="https://www.facebook.com/">
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link to="https://www.instagram.com/">
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link to="https://www.linkedin.com/">
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="https://github.com/">
              <i class="fa-brands fa-github"></i>
            </Link>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} MOJI. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
