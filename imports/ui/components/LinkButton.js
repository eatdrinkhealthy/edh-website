import React, {
  PropTypes,
} from "react";
import { linkButtonStyle } from "../styles";

const LinkButton = props => (
  <div>
    <a href={props.url} className={linkButtonStyle.css}>{props.text}</a>
  </div>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkButton;
