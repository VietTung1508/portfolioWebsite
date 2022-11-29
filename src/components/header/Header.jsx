import "./header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLocation, Link } from "react-router-dom";
import { faBriefcase, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen, faUser } from "@fortawesome/free-regular-svg-icons";

const navItem = [
  {
    name: "Home",
    path: "/",
    icon: faHouse,
  },
  {
    name: "About",
    path: "/aboutMe",
    icon: faUser,
  },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: faBriefcase,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faEnvelopeOpen,
  },
];

function Header() {
  const { pathname } = useLocation();

  const active = navItem.findIndex((item) => item.path === pathname);

  return (
    <div className="header">
      <ul className="header__items">
        {navItem.map((item, i) => (
          <Link to={item.path} key={i}>
            <li
              className={`header__items__item ${active === i ? "active" : ""}`}
            >
              <h2 className="header-title">{item.name}</h2>
              <FontAwesomeIcon className="header-icon" icon={item.icon} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
