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
          <a href="https://aichief-web-bice.vercel.app/ai-entertainment-tools/vibeknow-ai?utm_source=aichief_embed" data-aichief-domain-verification="LggcbFoQK7Iz4fOnxhjLnhdlzHS7hzSP" title="Vibeknow"><img src="https://aichief-web-bice.vercel.app/assets/brand/dark-featured-logo.svg" alt="Vibeknow Featured on AIChief" width="305" height="94" /></a>
        </div>
      </div>
    </>
  );
};
export default Footer;
