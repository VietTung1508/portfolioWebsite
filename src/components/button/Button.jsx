import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.path}>
      <button className={`btn ${props.className}`}>
        <span className="btn__icon">
          <FontAwesomeIcon className="icon" icon={props.icon} />
        </span>
        <span className="btn__children">{props.children}</span>
      </button>
    </Link>
  );
}

export default Button;
