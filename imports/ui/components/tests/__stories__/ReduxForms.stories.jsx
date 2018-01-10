import React from "react";
import { storiesOf } from "@storybook/react";
import Provider from "./Provider";
import ContactForm from "../../ContactForm";

storiesOf("Redux Forms", module)
  .addDecorator(story => <Provider story={story()} />)
  .add("Contact Form", () => <ContactForm />);
