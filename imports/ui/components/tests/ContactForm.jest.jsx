// @flow
/* eslint-env jest */
/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import ContactForm from "../ContactForm";
import mountFormWithInputs from "../../../utils/tests/mountFormWithInputs";
import appReducer from "../../../state/reducers";

describe("<ContactForm />", () => {
  const testStore = createStore(appReducer);

  it("matches render snapshot - with no form validation errors", () => {
    // render form with no input values to display validation errors
    const tree = renderer
      .create(
        <Provider store={testStore}>
          <ContactForm onSubmit={() => {}} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should set Name 'too short' error, when Name less than min length", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    const wrapper = mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactName: "a",
      },
      testStore,
    );

    wrapper.find("#contactName").simulate("blur"); // blur triggers field validation

    expect(wrapper.find("#contactNameError").text()).toBe(
      "Must have a least 2 characters.",
    );
  });

  it("should set invalid email error, when email format is invalid", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    const wrapper = mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactEmail: "user12",
      },
      testStore,
    );

    wrapper.find("#contactEmail").simulate("blur"); // blur triggers field validation

    expect(wrapper.find("#contactEmailError").text()).toBe("Invalid email address.");
  });

  it("should set message 'too short' error, when message is too short", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    const wrapper = mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactMessage: "1",
      },
      testStore,
    );

    wrapper.find("#contactMessage").simulate("blur"); // blur triggers field validation

    expect(wrapper.find("#contactMessageError").text()).toBe(
      "Must have a least 2 characters.",
    );
  });

  it("should set message 'too long' error, when message is too long", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    const wrapper = mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactMessage:
          "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
          "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
          "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
          "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890" +
          "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
      },
      testStore,
    );

    wrapper.find("#contactMessage").simulate("blur"); // blur triggers field validation

    expect(wrapper.find("#contactMessageError").text()).toBe(
      "Must not have more than 500 characters.",
    );
  });

  it("should call onSubmit, when submitting and all form fields are valid", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    const wrapper = mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactName: "user12",
        contactEmail: "user12@test.com",
        contactMessage: "a message to send.",
      },
      testStore,
    );

    wrapper.find("#contactSubmit").simulate("submit");
    expect(props.onSubmit).toHaveBeenCalledWith(
      {
        contactName: "user12",
        contactEmail: "user12@test.com",
        contactMessage: "a message to send.",
      },
      expect.anything(),
      expect.anything(),
    );
  });

  it("should clear name, email, and message on successful submit", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    const wrapper = mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactName: "user12",
        contactEmail: "user12@test.com",
        contactMessage: "a message to send.",
      },
      testStore,
    );
    const contactNameNode = wrapper.find("#contactName");
    const contactEmailNode = wrapper.find("#contactEmail");
    const contactMessageNode = wrapper.find("#contactMessage");

    // give focus to contactMessageNode input (like a user would do before submit)
    contactEmailNode.prop("onFocus")();
    wrapper.find("#contactSubmit").simulate("submit");

    expect(contactNameNode.props().value).toEqual("");
    expect(contactEmailNode.props().value).toEqual("");
    expect(contactMessageNode.props().value).toEqual("");
    // NOTE: document.querySelector called in onSubmitSuccess works in browser but not in jest
    // expect(usernameNode.get(0)).toEqual(document.activeElement);
  });

  it("should set focus to Name input on render", () => {
    const props = {
      onSubmit: jest.fn(),
    };

    mountFormWithInputs(
      <ContactForm {...props} />,
      {
        contactName: "user12",
        contactEmail: "user12@test.com",
        contactMessage: "a message to send.",
      },
      testStore,
    );

    expect(document.activeElement.id).toBe("contactName");
  });
});
