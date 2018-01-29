import React from "react";
import ContactForm from "./ContactForm";

const Main = () => (
  <main className="app-main">
    <section className="app-main__content">
      <div className="row">
        <div className="column small-12 medium-7">
          <img src="images/device.png" alt="Mobile Phone Device" />
        </div>
        <div className="column small-12 medium-5">
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
);

export default Main;
