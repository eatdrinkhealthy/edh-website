import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import AlertMessage from "../components/AlertMessage";

class ContactContainer extends Component {
  submit = values => {
    AlertMessage.success(JSON.stringify(values));
  };

  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default ContactContainer;
