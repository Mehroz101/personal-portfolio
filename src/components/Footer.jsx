import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { portfolio_data } from "../../public/portfoliodata";
const Footer = () => {
  const [footerdata,setfooterData] = useState("")
  useEffect(()=>{
    setfooterData(portfolio_data?.FooterSection)
  },[])
  return (
    <>
      <div className="footer">
        <div className="stylediv"></div>
        <div className="top">
          <h1>{footerdata?.heading}</h1>
          <div className="social_links">
            <Link to={footerdata?.links?.facebook}>
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to={footerdata?.links?.instagram}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to={footerdata?.links?.linkdin}>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to={footerdata?.links?.github}>
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link to={footerdata?.links?.whatsapp}>
                <i className="fa-brands fa-whatsapp"></i>
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
