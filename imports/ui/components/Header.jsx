import React from "react";
import NavBar from "./NavBar";

const Header = () => (
  <div>
    <NavBar />
    <header className="app-header">
      <section className="app-header__banner">
        <div className="app-header__banner-content-wrapper">
          <div className="row">
            <div className="column medium-8 large-7">
              <div className="app-header__banner-headline">
                A platform to find, share, and discuss healthy places to shop and eat.
              </div>
              <div className="app-header__banner-buttons">
                <a
                  href="https://app.eatdrinkhealthy.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--app-store"
                >
                  <i className="fa fa-apple" />
                  <span>
                    Download on<br />the <strong>App Store</strong>
                  </span>
                </a>
                <a
                  href="https://itunes.apple.com/app/id1116167404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--wep-app"
                >
                  <span>Web App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  </div>
);

export default Header;
