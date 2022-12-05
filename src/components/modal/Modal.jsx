import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.scss";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

function Modal(props) {
  const [active, setActive] = useState(false);
  const [activeThumb, setActiveThumb] = useState();

  const modalRef = useRef();
  const overlayRef = useRef();

  SwiperCore.use([Navigation, Pagination, Thumbs]);

  const item = props.item;

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  const handleExit = () => {
    modalRef.current.classList.remove("active");
    overlayRef.current.classList.remove("active");
  };

  return (
    <>
      <div
        ref={overlayRef}
        className={`modal-overlay ${active ? "active" : ""}`}
        id={`overlay_${props.id}`}
      />
      <div
        ref={modalRef}
        className={`modal ${active ? "active" : ""}`}
        id={props.id}
      >
        <FontAwesomeIcon
          className="modal__x"
          icon={faXmark}
          onClick={handleExit}
        />
        <div className="modal-content">
          <div className="modal-content__gallery">
            <h3 className="modal-title">
              {item.type} <span />
            </h3>
            <div className="main-gallery">
              <Swiper
                grabCursor={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: activeThumb }}
              >
                {item.img.map((el, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <img
                        className={`main-img ${isActive ? "active" : ""}`}
                        src={el}
                        alt=""
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="sub-gallery">
              <Swiper
                modules={[Thumbs]}
                slidesPerView={3}
                spaceBetween={10}
                onSwiper={setActiveThumb}
              >
                {item.img.map((el, i) => (
                  <SwiperSlide key={i}>
                    {({ isActive }) => (
                      <img
                        className={`sub-img ${isActive ? "active" : ""}`}
                        src={el}
                        alt=""
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="modal-content__info">
            <h3 className="modal-title">
              Details <span />
            </h3>
            <div className="modal-detail">
              <h2 className="modal-detail__title">{item.name}</h2>
              <p className="modal-detail__overview">{item.overview}</p>
              <h4>
                FrontEnd - <span>{item.frontEnd}</span>
              </h4>
              <h4>
                BackEnd - <span>{item.backEnd}</span>
              </h4>
              <h4>
                Tags -{" "}
                {item.tags.map((tag, i) => (
                  <span key={i}>
                    {tag}
                    {i < item.tags.length - 1 ? " / " : ""}
                  </span>
                ))}
              </h4>

              <h4>
                Link Demo -{" "}
                <span>
                  <a target="_blank" rel="noreferrer" href={item.link}>
                    {item.link}
                  </a>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
