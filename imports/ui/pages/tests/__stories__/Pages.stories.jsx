import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import SplashPage from "../../SplashPage";
import PrivacyPolicy from "../../PrivacyPolicy";

storiesOf("Pages", module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add("splash page", () => <SplashPage />)
  .add("privacy policy", () => <PrivacyPolicy />);
