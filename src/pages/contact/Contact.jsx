import PageHeader from "../../components/pageHeader/PageHeader";

function Contact() {
  return (
    <div>
      <PageHeader />
      <div className="contact container section">
        <div className="contact__content">
          <div className="contact__content__info">
            <h2>Don't be shy</h2>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
          </div>
          <div className="contact__content__form"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
