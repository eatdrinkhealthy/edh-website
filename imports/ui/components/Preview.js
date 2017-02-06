import React from "react";
import {
  appLinksHeaderStyle,
  appLinksButtonsStyle,
} from "../styles";
import LinkButton from "./LinkButton";

const Preview = () => (
  <div>
    <div className={`${appLinksHeaderStyle.className}`}>Early Version Preview...</div>
    <div className={`${appLinksButtonsStyle.className}`}>
      <LinkButton text="Web App" url="https://app.eatdrinkhealthy.co/" />
      <LinkButton text="App Store" url="https://itunes.apple.com/app/id1116167404" />
    </div>
  </div>
);

export default Preview;
