import React from "react";
import { storiesOf } from "@storybook/react";
import Provider from "./Provider";
import ContactUsForm from "../../ContactUsForm";

storiesOf("Redux Forms", module)
  .addDecorator(story => <Provider story={story()} />)
  .add("Contact Us Form", () => <ContactUsForm />);
