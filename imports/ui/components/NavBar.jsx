import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class HashLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  };

  handleClick = () => {
    document.querySelector(this.props.to).scrollIntoView();
  };

  render() {
    return <NavLink {...this.props} onClick={this.handleClick} />;
  }
}

const NavBar = () => (
  <div className="row">
    <div className="column">
      <div className="app-header__top">
        <a href="/">
          <img src="images/logo.png" alt="Company Logo" />
        </a>

        <nav className="app-header-nav">
          <ul className="menu align-center">
            <li>
              <NavLink to="/" activeStyle={{ color: "#f28020" }} exact>
                HOME
              </NavLink>
            </li>
            <li>
              <HashLink to="#contactForm" activeStyle={{ color: "#f28020" }} exact>
                CONTACT
              </HashLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" activeStyle={{ color: "#f28020" }} exact>
                PRIVACY
              </NavLink>
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
