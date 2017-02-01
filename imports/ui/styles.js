import { css } from "glamor";

// TODO - verify precedence / order works properly
const gradientBackgroundRules = {
  background: [
    "#048ec5",
    "-moz-linear-gradient(-45deg, #048ec5 0%, #2ecc71 100%) fixed",
    "-webkit-linear-gradient(-45deg, #048ec5 0%,#2ecc71 100%) fixed",
    "linear-gradient(135deg, #048ec5 0%,#2ecc71 100%) fixed",
  ],
  // // TODO - verify taking effect
  /* IE6-9 fallback on horizontal gradient */
  filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#048ec5', endColorstr='#2ecc71',GradientType=1 )",
};

const defaultPageRules = {
  ...gradientBackgroundRules,
  color: "white",
  padding: "30px",
};
export const defaultPageStyle = {
  rules: defaultPageRules,
  className: `${css(defaultPageRules)}`,
};

const companyNameRules = {
  backgroundImage: "url('/images/logo.png')",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  width: "226px",
  height: "156px",
  display: "block",
  margin: "90px auto 0",
};
export const companyNameStyle = {
  rules: companyNameRules,
  className: `${css(companyNameRules)}`,
};

const linkButtonRules = {
  backgroundColor: "darkslategray",
  border: "none",
  borderRadius: "4px",
  color: "white",
  padding: "8px 32px 8px 32px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "12px",
};
export const linkButtonStyle = {
  rules: linkButtonRules,
  className: `${css(linkButtonRules)}`,
};

const pitchRules = {
  paddingTop: "30px",
  fontSize: "15px",
  color: "white",
  display: "block",
  width: "226px",
  margin: "0 auto",
  paddingBottom: "30px",
  borderBottom: "1px solid rgba(255,255,255,0.6)",
};
export const pitchStyle = {
  rules: pitchRules,
  className: `${css(pitchRules)}`,
};

const comingSoonRules = {
  fontFamily: "Montserrat",
  paddingTop: "30px",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  color: "white",
  paddingBottom: "30px",
  borderBottom: "1px solid rgba(255,255,255,0.6)",
  display: "block",
  width: "226px",
  margin: "0 auto",
};
export const comingSoonStyle = {
  rules: comingSoonRules,
  className: `${css(comingSoonRules)}`,
};

/*
 .ios-icon {
 background-image: url("/images/ios-icon.png");
 background-size: 100%;
 width: 90px;
 height: 90px;
 margin: 30px auto;
 }
 */

/*
 .app-links-header {
 margin-top: 90px;
 margin-left: 40px;
 font-size: 16px;
 color: white;
 }

 .app-links-buttons {
 margin-top: 14px;
 margin-left: 40px;
 margin-bottom: 20px;
 }

 */
