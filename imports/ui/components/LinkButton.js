import React, {
  PropTypes,
} from "react";
import { linkButtonStyle } from "../styles";

const LinkButton = props => (
  <a href={props.url} className={linkButtonStyle.className}>{props.text}</a>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkButton;
