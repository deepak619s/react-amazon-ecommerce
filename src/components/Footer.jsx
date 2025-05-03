import React from "react";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">About Amazon</Link>
            </li>
            <li>
              <Link to="#">Investor Relations</Link>
            </li>
            <li>
              <Link to="#">Amazon Devices</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <Link to="#">Sell on Amazon</Link>
            </li>
            <li>
              <Link to="#">Sell under Amazon Accelerator</Link>
            </li>
            <li>
              <Link to="#">Become an Affiliate</Link>
            </li>
            <li>
              <Link to="#">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="#">Self-Publish with Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <Link to="#">Amazon Business Card</Link>
            </li>
            <li>
              <Link to="#">Shop with Points</Link>
            </li>
            <li>
              <Link to="#">Credit Card Marketplace</Link>
            </li>
            <li>
              <Link to="#">Reload Your Balance</Link>
            </li>
            <li>
              <Link to="#">Amazon Currency Converter</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <Link to="#">Amazon and COVID-19</Link>
            </li>
            <li>
              <Link to="#">Your Account</Link>
            </li>
            <li>
              <Link to="#">Your Orders</Link>
            </li>
            <li>
              <Link to="#">Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link to="#">Returns & Replacements</Link>
            </li>
            <li>
              <Link to="#">Help</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </div>
        <div className="footer-links">
          <select className="footer-language">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
          <Link to="#">Conditions of Use</Link>
          <Link to="#">Privacy Notice</Link>
          <Link to="#">Your Ads Privacy Choices</Link>
        </div>
        <div className="footer-copyright">
          @ 2025 Deepak Sinha. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
