import Alert from "react-s-alert";
import PropTypes from "prop-types";

// note, css required for this package is imported in 'css-packages.css'

class AlertMessage extends Alert {
  static propTypes = {
    position: PropTypes.string,
    offset: PropTypes.number,
    stack: PropTypes.oneOfType([
      PropTypes.bool, // boolean | { limit: number },
      PropTypes.object,
    ]),
  };

  // customizing default props (slightly different than Alert)
  static defaultProps = {
    position: "top",
    offset: 0,
    stack: { limit: 5 },
  };
}

export default AlertMessage;
