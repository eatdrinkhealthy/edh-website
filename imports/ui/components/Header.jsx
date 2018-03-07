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
                  className="button button--wep-app"
                >
                  <span>Web App</span>
                </a>
              </div>
            </div>
            <div className="app-header__banner-message">
              <p>
                <span style={{ paddingRight: ".75em" }}>ATTENTION:</span>The Eat Drink
                Healthy app is no longer being supported, and will not be available for
                download from the App Store as of Friday, March 9th, 2018.
              </p>
              <p>
                Currently installed apps will have access to any user created data until
                Friday, March 16th, 2018.
              </p>
              <p>
                If any current user would like user created lists exported, send an email
                using the website contact form or email icon. Please include your first
                and last name, as stated in your Facebook account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  </div>
);

export default Header;
