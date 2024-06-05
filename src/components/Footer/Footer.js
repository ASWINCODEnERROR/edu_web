import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {

  const handleClick =()=>{
    window.scrollTo(0,0);

  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Edumate</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit hic
              magni libero vel odit nesciunt? Minus nam deleniti aliquam error,
              animi sequi earum ex quos sunt suscipit nihil excepturi inventore.
            </p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link to="/courses"onClick={handleClick}>Our Programs </Link>
              </li>
              <li>
                <Link to="/services"onClick={handleClick}>Our Plan</Link>
              </li>
              <li>
                <a href="#"onClick={handleClick}>Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
                <Link to="/about" onClick={handleClick}>About us </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleClick}>contact us</Link>
              </li>
              <li>
                <a href="/support"onClick={handleClick}>support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
