import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

const ValidationError = ({ children, visible }) => {
  const classes = `form-error ${visible ? "is-visible" : ""}`;

  return <span className={classes}>{children}</span>;
};

ValidationError.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
};

ValidationError.defaultProps = {
  children: "",
  visible: false,
};

/* eslint-disable jsx-a11y/label-has-for */

const ContactFormComponent = () => (
  <div>
    <h2>Contact Us</h2>
    <form onSubmit={() => alert("submitted!")}>
      <div>
        <label htmlFor="contactName">Name </label>
        <Field name="contactName" component="input" type="text" autoFocus />
        <ValidationError visible>validation error.</ValidationError>
      </div>

      <div>
        <label htmlFor="contactEmail">Email </label>
        <Field name="contactEmail" component="input" type="email" />
        <ValidationError>validation error.</ValidationError>
      </div>

      <div>
        <label htmlFor="contactMessage">Message </label>
        <Field name="contactMessage" component="textarea" rows={10} cols={50} />
        <ValidationError>validation error.</ValidationError>
      </div>

      <button id="contactSubmit" type="submit" className="button button--submit">
        Send
      </button>
    </form>
  </div>
);

const ContactForm = reduxForm({ form: "contactForm" })(ContactFormComponent);

export default ContactForm;
