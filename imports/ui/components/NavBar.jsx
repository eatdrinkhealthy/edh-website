import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="row">
    <div className="column">
      <div className="app-header__top">
        <a href="/">
          <img src="images/logo.png" alt="Company Logo" />
        </a>

        <nav className="app-header-nav">
          <ul className="menu align-center">
            <li className="is-active">
              <Link to="/" activeClassName="active-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" activeClassName="active-link">
                PRIVACY
              </Link>
            </li>
          </ul>
        </nav>

        <div className="app-header-social text-center medium-text-right">
          <a href="mailto:info@eatdrinkhealthy.co">
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-envelope fa-stack-1x fa-inverse" />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/16173480/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
