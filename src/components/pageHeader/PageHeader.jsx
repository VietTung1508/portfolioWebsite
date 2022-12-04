import "./pageHeader.scss";

import { useLocation } from "react-router-dom";

function PageHeader() {
  const { pathname } = useLocation();

  const title =
    pathname === "/aboutMe"
      ? "About"
      : pathname === "/contact"
      ? "Get In"
      : "My";

  const subTitle =
    pathname === "/aboutMe"
      ? "Me"
      : pathname === "/contact"
      ? "Touch"
      : "Portfolio";

  const behindTitle =
    pathname === "/aboutMe"
      ? "Resume"
      : pathname === "/contact"
      ? "Contact"
      : "Works";

  return (
    <div className="pageHeader" data-aos="fade-up" data-aos-duration="1200">
      <h1 className="title">
        {title} <span className="subTitle">{subTitle}</span>
      </h1>
      <span className="title-bg">{behindTitle}</span>
    </div>
  );
}

export default PageHeader;
