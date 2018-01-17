import React from "react";
import { Field, reduxForm } from "redux-form";

/* eslint-disable */

const errorMessage = () => <div style={{ color: "red" }}>{children}</div>;

const ContactFormComponent = () => (
  <div
    style={{
      border: "2px solid #ccc",
      margin: "10px",
      padding: "5px",
      width: "480px",
    }}
  >
    <h2>Contact Us</h2>
    <form onSubmit={() => alert("submitted!")}>
      <div>
        <label htmlFor="contactName">Name </label>
        <Field name="contactName" component="input" type="text" autoFocus />
        <errorMessage>validation error.</errorMessage>
      </div>

      <div>
        <label htmlFor="contactEmail">Email </label>
        <Field name="contactEmail" component="input" type="email" />
        <div>validation error.</div>
      </div>

      <div>
        <label htmlFor="contactMessage">Message </label>
        <Field name="contactMessage" component="textarea" rows={10} cols={50} />
        <div>validation error.</div>
      </div>

      <button id="contactSubmit" type="submit">
        Submit
      </button>
    </form>
  </div>
);

const ContactForm = reduxForm({ form: "contactForm" })(ContactFormComponent);

export default ContactForm;
