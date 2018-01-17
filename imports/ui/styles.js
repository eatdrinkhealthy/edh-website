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

const appLinksHeaderRules = {
  marginTop: "90px",
  marginLeft: "40px",
  fontSize: "16px",
  color: "darkbrown",
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
