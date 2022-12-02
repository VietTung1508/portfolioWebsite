import "./biography.scss";
import Button from "../button/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Biography() {
  return (
    <>
      <div className="biography">
        <div className="block" />
        <div
          className="biography__content"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="biography__content__imgWrap">
            <div className="biography__content__imgWrap__img" />
          </div>
          <div className="biography__content__infoWrap">
            <div className="biography__content__infoWrap__info">
              <h1>
                I'M HUYNH VIET TUNG.
                <span>WEB DEVELOPER !</span>
              </h1>
              <p>
                Hello mọi người mình là Tùng. Hiện đang là một sinh viên năm thứ
                hai tại một trường cao đẳng ở Hà Nội. Cũng như bao anh em khác
                mình tình cờ biết đến cộng đồng F8 của anh Sơn Đặng qua
                Facebook. Mình đã hoàn thành khóa ReactJs, JavaScript của anh
                Sơn và đã có làm qua một số dự án cá nhân lớn nhỏ. Thật sự mình
                rất biết ơn đến anh Sơn và cộng đồng F8 đã giúp mình có động lực
                theo đuổi ngành học khó nhằn này !!!
              </p>
              <div className="btns">
                <Button path="/aboutMe" icon={faArrowRight}>
                  About Me
                </Button>
                <Button path="/portfolio" icon={faArrowRight}>
                  My Portfolio
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
