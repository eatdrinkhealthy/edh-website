import React from "react";
import { storiesOf } from "@storybook/react";
import SplashPage from "../../SplashPage";
import PrivacyPolicy from "../../PrivacyPolicy";

storiesOf("Pages", module)
  .add("splash page", () => <SplashPage />)
  .add("privacy policy", () => <PrivacyPolicy />);
