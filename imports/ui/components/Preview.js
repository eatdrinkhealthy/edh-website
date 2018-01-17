import React from "react";
import { appLinksButtonsStyle } from "../styles";
import LinkButton from "./LinkButton";

const Preview = () => (
  <div
    style={{
      position: "absolute",
      bottom: 0,
    }}
  >
    <div className={appLinksButtonsStyle.className}>
      <LinkButton text="Web App" url="https://app.eatdrinkhealthy.co/" />
      <LinkButton text="App Store" url="https://itunes.apple.com/app/id1116167404" />
    </div>
  </div>
);

export default Preview;