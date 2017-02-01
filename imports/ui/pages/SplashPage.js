import React from "react";
import { defaultPageStyle } from "../styles";
import CompanyName from "../components/CompanyName";
import Pitch from "../components/Pitch";

const SplashPage = () => (
  <div className={defaultPageStyle.className}>
    <CompanyName />
    <Pitch />
  </div>
);

SplashPage.style = defaultPageStyle;

export default SplashPage;
