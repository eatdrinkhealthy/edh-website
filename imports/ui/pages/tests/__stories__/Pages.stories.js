import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import SplashPage from "../../SplashPage";
import Support from "../../Support";
import PrivacyPolicy from "../../PrivacyPolicy";


storiesOf("Pages", module)
  .add("splash page", () => (<SplashPage />))
  .add("support", () => (<Support />))
  .add("privacy policy", () => (<PrivacyPolicy />));
