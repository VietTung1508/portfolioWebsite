import "./biography.scss";
import Button from "../button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "../../assets/avatar.jpg";

function Biography() {
  return (
    <>
      <div className="biography container ">
        <div className="block" />
        <div
          className="biography__content"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="biography__content__imgWrap">
            <div
              className="biography__content__imgWrap__img"
              style={{
                backgroundImage: `url(${avatar})`,
              }}
            />
          </div>
          <div className="biography__content__infoWrap">
            <div className="mobileAvatar">
              <img src={avatar} alt="" />
            </div>
            <div className="biography__content__infoWrap__info">
              <h1>
                I'M HUYNH VIET TUNG.
                <span>WEB DEVELOPER !</span>
              </h1>
              <p>
                Xin chào mọi người mình tên là Tùng. Hiện đang là sinh viên của
                trường Cao đẳng công nghệ và thương mại Hà Nội.Mình đã hoàn
                thành được các khóa học online như The Complete JavaScript
                Course 2023: From Zero to Expert! của thầy Jonas , ReactJs của
                anh Sơn Đặng , The Web Developer Bootcamp của thầy Colt Steele
                trên Udemy và một vài khóa crash course trên youtube.
              </p>
              <div className="btns">
                <Button path="/portfolio" icon={faArrowRight}>
                  Portfolio
                </Button>
                <Button path="/aboutMe" icon={faArrowRight}>
                  About
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Biography;
