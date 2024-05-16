import React from "react";
import logo from "./../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <div>
      <div className="tokyo_tm_topbar">
        <div className="topbar_inner">
          <div className="logo" data-type="image">
            <Link to="/">
              <img src={logo} alt />
              <h3>DHARA</h3>
            </Link>
          </div>
          <div className="trigger">
            <div className="hamburger hamburger--slider">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_mobile_menu">
        <div className="menu_list">
          <ul className="transition_link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo" data-type="image">
            <Link to="/">
              <img src={logo} alt />
              <h3>DHARA</h3>
            </Link>
          </div>
          <div className="menu">
            <ul className="transition_link">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/news">Appreciation</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            </ul>
          </div>
          <div className="copyright">
            <p>
              &copy; 2023 Dhara Pancholi
              <br />
              Created by &nbsp;
              <Link href="/" target="_blank">
                 I N P
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
