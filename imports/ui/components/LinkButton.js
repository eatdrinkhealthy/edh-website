import React, {
  PropTypes,
} from "react";
import { linkButton } from "../styles";

const LinkButton = props => (
  <div>
    <a href="#" className={linkButton}>{props.text}</a>
  </div>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LinkButton;
