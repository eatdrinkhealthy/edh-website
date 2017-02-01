import React from "react";
import { defaultPageStyle } from "../styles";
import CompanyName from "../components/CompanyName";
import Pitch from "../components/Pitch";
import ComingSoon from "../components/ComingSoon";
import Logo from "../components/Logo";

const SplashPage = () => (
  <div className={defaultPageStyle.className}>
    <CompanyName />
    <Pitch />
    <ComingSoon />
    <Logo />
  </div>
);

SplashPage.style = defaultPageStyle;

export default SplashPage;
