import React from "react";
import { appLinksHeaderStyle } from "../styles";
import LinkButton from "./LinkButton";

const Preview = () => (
  <div>
    <div className={`${appLinksHeaderStyle.className}`}>Early Version Preview...</div>
    <LinkButton text="Web App" url="https://app.eatdrinkhealthy.co/" />
    <LinkButton text="App Store" url="https://itunes.apple.com/app/id1116167404" />
  </div>
);

export default Preview;
