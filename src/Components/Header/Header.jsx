import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="imgContainer">
            <Link className="linkImg" to="/home">
            <img
            src="	https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png"
            alt=""
          />
            </Link>
          
        </div>
        <div className="navbar">
          <ul>
            <Link className="link" to="/home">
              <li>Home</li>
            </Link>
            <Link className="link" to="/about">
              <li>About</li>
            </Link>
            <Link className="link" to="/project">
              <li>Project</li>
            </Link>
            <Link className="link" to="/service">
              <li>Services</li>
            </Link>
            <Link className="link" to="/blog">
              <li>Blog</li>
            </Link>
            <Link className="link" to="/contact">
              <li>Contacts</li>
            </Link>
          </ul>
        </div>
        <div className="buttonContainer">
          <button>Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
