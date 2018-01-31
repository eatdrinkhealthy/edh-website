import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Required field.");
const emailFormat = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address."
    : undefined;

/* eslint-disable jsx-a11y/label-has-for, jsx-a11y/no-autofocus */

const renderInput = ({ input, label, type, autoFocus, meta: { touched, error } }) => (
  <div>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} component="input" type={type} autoFocus={autoFocus} />
    {touched && error && <span className="form-error is-visible">{error}</span>}
  </div>
);

renderInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired, // eslint-disable-line react/forbid-prop-types
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.stringisRequired,
  }).isRequired,
};

renderInput.defaultProps = { autoFocus: false };

const ContactFormComponent = props => {
  const { handleSubmit } = props;

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="contactName"
          label="Name"
          component={renderInput}
          type="text"
          validate={required}
          autoFocus
        />

        <Field
          name="contactEmail"
          label="Email"
          component={renderInput}
          type="email"
          validate={[required, emailFormat]}
        />

        <div>
          <label htmlFor="contactMessage">Message </label>
          <Field name="contactMessage" component="textarea" rows={10} cols={50} />
        </div>

        <button id="contactSubmit" type="submit" className="button button--submit">
          Send
        </button>
      </form>
    </div>
  );
};

ContactFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const ContactForm = reduxForm({ form: "contactForm" })(ContactFormComponent);

export default ContactForm;
