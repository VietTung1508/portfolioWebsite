import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const infoList = [
  {
    title: "Address Point",
    content: "Chung cư CT1 Ngô Thì Nhậm Hà Cầu, Hà Đông, Hà Nội",
    icon: faLocationDot,
  },
  {
    title: "Mail Me",
    content: "viettung150803@gmail.com",
    icon: faEnvelopeOpen,
  },
  {
    title: "Call Me",
    content: "+84 98 607 4833",
    icon: faPhone,
  },
];

function Contact() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_preyrqh",
        "template_fg90n0q",
        formRef.current,
        "Ps6m_ewb_vU7acuL3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <PageHeader />
      <div className="contact container section">
        <div className="contact__content">
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Your Message has been received !
            </Alert>
          </Snackbar>
          <div className="contact__content__info">
            <h2 className="title">Don't be shy !</h2>
            <p className="message">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            {infoList.map((info, i) => (
              <div key={i} className="getInTouch">
                <div className="icon-wrap">
                  <FontAwesomeIcon icon={info.icon} className="icon" />
                </div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </div>
            ))}
            <ul className="icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/huynh.viettung.3/"
              >
                <li className="icon-wrapper">
                  <FacebookIcon />
                </li>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/VietTung1508?tab=repositories"
              >
                <li className="icon-wrapper">
                  <GitHubIcon />
                </li>
              </a>
            </ul>
          </div>
          <div className="contact__content__form">
            <form
              className="contact__content__form__field"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="infos">
                <div className="name">
                  <input
                    value={name}
                    placeholder="Your Name..."
                    name="user_name"
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <input
                    value={email}
                    placeholder="Your Email..."
                    name="user_email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="subject">
                <input
                  value={subject}
                  type="text"
                  name="user_subject"
                  placeholder="Your Subject..."
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="message">
                <textarea
                  value={message}
                  name="message"
                  placeholder="Your Message..."
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className={`btn`}>
                <span className="btn__icon">
                  <FontAwesomeIcon className="icon" icon={faPaperPlane} />
                </span>
                <span className="btn__children">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
