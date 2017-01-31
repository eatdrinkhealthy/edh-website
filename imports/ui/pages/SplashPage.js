import React from "react";
import { defaultPageStyle } from "../styles";
import CompanyName from "../components/CompanyName";

const SplashPage = () => (
  <div className={defaultPageStyle.css}>
    <CompanyName />
  </div>
);

SplashPage.style = defaultPageStyle;

export default SplashPage;
