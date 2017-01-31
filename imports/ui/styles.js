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
  css: css(defaultPageRules),
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
  css: css(companyNameRules),
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
  css: css(linkButtonRules),
};

/*
 .pitch {
 padding-top: 30px;
 font-size: 15px;
 color: white;

 display: block;
 width: 226px;
 margin: 0 auto;
 padding-bottom: 30px;
 border-bottom: 1px solid rgba(255,255,255,0.6);
 }

 .coming-soon {
 font-family: "Montserrat";
 padding-top: 30px;
 font-size: 20px;
 font-weight: bold;
 text-align: center;
 color: white;
 padding-bottom: 30px;
 border-bottom: 1px solid rgba(255,255,255,0.6);
 display: block;
 width: 226px;
 margin: 0 auto;
 }

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
