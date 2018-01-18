import React from "react";

const Header = () => (
  <header className="app-header">
    <div className="row">
      <div className="column">
        <div className="app-header__top">
          <a href="/">
            <img src="images/logo.png" alt="Company Logo" />
          </a>

          <nav className="app-header-nav">
            <ul className="menu align-center">
              <li className="is-active">
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
              <li>
                <a href="#">PRIVACY</a>
              </li>
            </ul>
          </nav>

          <div className="app-header-social text-center medium-text-right">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-envelope fa-stack-1x fa-inverse" />
              </span>
            </a>
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className="fa fa-linkedin fa-stack-1x fa-inverse" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <section className="app-header__banner">
      <div className="app-header__banner-content-wrapper">
        <div className="row">
          <div className="column medium-8 large-7">
            <div className="app-header__banner-headline">
              A platform to find, share, and discuss healthy places to shop and eat.
            </div>
            <div className="app-header__banner-buttons">
              <a href="#" className="button button--app-store">
                <i className="fa fa-apple" />
                <span>
                  Download on<br />the <strong>App Store</strong>
                </span>
              </a>
              <a href="#" className="button button--wep-app">
                <span>Web App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
