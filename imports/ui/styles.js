import { css } from "glamor";

//
// Component Style Pattern (use with glamor)
//
// const componentRules = {
//    rule1: "value",
//      ...
//    ruleN: "value",
// };
// export const componentStyle = {
//    rules: componentRules,
//    className: `${css(componentRules)}`,
// };
//

const gradientBackgroundRules = {
  background: [
    "#048ec5",
    "-moz-linear-gradient(-45deg, #048ec5 0%, #2ecc71 100%) fixed",
    "-webkit-linear-gradient(-45deg, #048ec5 0%,#2ecc71 100%) fixed",
    "linear-gradient(135deg, #048ec5 0%,#2ecc71 100%) fixed",
  ],
  /* IE6-9 fallback on horizontal gradient */
  filter:
    "progid:DXImageTransform.Microsoft.gradient( startColorstr='#048ec5', endColorstr='#2ecc71',GradientType=1 )",
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

const appLinksHeaderRules = {
  marginTop: "90px",
  marginLeft: "40px",
  fontSize: "16px",
  color: "white",
};
export const appLinksHeaderStyle = {
  rules: appLinksHeaderRules,
  className: `${css(appLinksHeaderRules)}`,
};

const appLinksButtonsRules = {
  marginTop: "14px",
  marginBottom: "20px",
  marginLeft: "40px",
};
export const appLinksButtonsStyle = {
  rules: appLinksButtonsRules,
  className: `${css(appLinksButtonsRules)}`,
};

const linkButtonRules = {
  backgroundColor: "darkslategray",
  border: "none",
  borderRadius: "4px",
  color: "white",
  padding: "8px 32px 8px 32px",
  marginRight: "8px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "12px",
};
export const linkButtonStyle = {
  rules: linkButtonRules,
  className: `${css(linkButtonRules)}`,
};
