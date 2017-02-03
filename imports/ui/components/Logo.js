import React from "react";
import { logoStyle } from "../styles";

const Logo = () => (
  <div className={`${logoStyle.className} anotherClass`} />
);

Logo.style = logoStyle;

export default Logo;
