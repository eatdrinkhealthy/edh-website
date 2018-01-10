import React from "react";
import { Field, reduxForm } from "redux-form";

const ContactFormComponent = () => (
  <div>
    <h2>Contact Us</h2>
    <form onSubmit={() => alert("submitted!")}>
      <Field
        inputId="contactName"
        name="contactName"
        component="input"
        type="text"
        label="Name"
        autoFocus
      />
      <button id="contactSubmit" type="submit">
        Submit
      </button>
    </form>
  </div>
);

const ContactForm = reduxForm({ form: "contactForm" })(ContactFormComponent);

export default ContactForm;
