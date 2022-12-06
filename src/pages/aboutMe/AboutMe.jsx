import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/button/Button";
import PageHeader from "../../components/pageHeader/PageHeader";
import "./aboutMe.scss";
import { skills } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const infoList = [
  {
    title: "First Name",
    content: "Huỳnh",
  },
  {
    title: "Last Name",
    content: "Việt Tùng",
  },
  {
    title: "Birthday",
    content: "15/08/2003",
  },
  {
    title: "Sex",
    content: "Male",
  },
  {
    title: "National",
    content: "Việt Nam",
  },
  {
    title: "Address",
    content: "Hà Đông - Hà Nội",
  },
  {
    title: "Phone Number",
    content: "0986074833",
  },
  {
    title: "Facebook",
    content: "huynh.viettung.3/",
  },
  {
    title: "Languages",
    content: "English , Vietnamese",
  },
  {
    title: "Email",
    content: "viettung150803@gmail.com",
  },
];

const expList = [
  {
    count: 1,
    content: "Years of",
    sub: "experience",
  },
  {
    count: 4,
    content: "Completed",
    sub: "Projects",
  },
  {
    count: 1,
    content: "Happy",
    sub: "Customers",
  },
  {
    count: 1,
    content: "Awards",
    sub: "Won",
  },
];

const educationList = [
  {
    date: "2021",
    title: "Trần Hưng Đạo",
    subTitle: "Hight School",
    content:
      "Sau khi tốt nghiệp cấp ba. Mình vẫn chưa hề có tí hứng thú nào với ngành IT mà dự định của mình là học ngành Marketing hoặc Logistics. Nhưng do mình đã không nỗ lực đủ trong việc ôn thi đại học do đó đã trượt hết tất cả nguyện vọng mình đăng ký với số điểm 23.5! ",
  },
  {
    date: "2021 - 2022",
    title: "College of Technology and trading",
    subTitle: "College",
    content:
      "Mình đăng ký vào trường hiện tại chủ yếu với dự định học cao đẳng rồi liên thông lên đại học sau và cũng vì học phí các trường cao đẳng rẻ hơn rất nhiều. Lúc đầu mình đăng ký ngành Logistics chứ không phải ngành IT nhưng khi mình được trải nghiệm thử lớp C++ và HTML&CSS mình cảm thấy ngành IT thú vị hơn nhiều với những dòng code và bài toán khó (dù mình không giỏi toán 1 chút nào :v).Mình quyết định đổi sang ngành IT từ đó.",
  },
  {
    date: "2022/2/16",
    title: "Quan Truong Minh Teacher",
    subTitle: "Toeic Course",
    content:
      "Trong quãng thời gian năm nhất mình nhận thấy tiếng anh thật sự rất quan trọng với ngành học của mình lên đã không ngần ngại đăng ký một lớp toeic để thi lấy chứng chỉ. Trong thời gian ôn luyện mình đã làm 7 quyển để từ dễ đến khó và cuối cùng đã đạt được điểm số 925 Toeic!!!",
  },
  {
    date: "2022/8/12",
    title: "F8 Website",
    subTitle: "Learning React Course",
    content:
      "Mình học HTML, CSS , JavaScript trên Udemy và khi đã thấy ổn với những gì mình có thì mình biết đến F8 của anh Sơn. Mình đăng ký lớp ReactJs và JavaScript nâng cao để củng cố kiến thức đã có.Nhờ công anh Sơn mà mình có đủ kiến thức về React để build một website như thế này !",
  },
  {
    date: "2022/10/2",
    title: "Making Website with React",
    subTitle: "Practicing",
    content:
      "2 tháng đổ lại đây mình tập trung thực hành xây dựng React app với những gì mình học được. Tuy những dự án React đầu tay của mình vẫn còn vô số lỗi lủng cũng trong cấu trúc nhưng mình đang trên đà sửa và khắc phục nó. Tương lai tới mình dự định học thêm về Database và TypeScript chỉ sau dự án Portfolio này.",
  },
];

function AboutMe() {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <PageHeader />
      <div className="aboutMe container section">
        <div className="aboutMe__content ">
          <div
            className="aboutMe__content__personalInfo"
            data-aos="fade-up-right"
            data-aos-duration="1200"
          >
            <h1 className="title">Personal Infos</h1>
            <ul className="info-list">
              {infoList.map((info, i) => (
                <li key={i}>
                  {info.title}: <span>{info.content}</span>
                </li>
              ))}
            </ul>
            <Button icon={faDownload}>Dowload CV</Button>
          </div>
          <div
            className="aboutMe__content__experience"
            data-aos="fade-up-left"
            data-aos-duration="1200"
          >
            <div className="exp-boxs">
              {expList.map((list, i) => (
                <div key={i} className="exp-box">
                  <h3>{list.count}</h3>
                  <p>
                    {list.content}
                    <span>{list.sub}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="seperator" />
        <div className="aboutMe__skill">
          <h1 className="title">My Skills</h1>
          <div className="skill-list">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="skill-item"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="skill-item__imgWrap">
                  <div
                    className="skill-item__imgWrap__img"
                    style={{
                      backgroundImage: `url(${skill.img})`,
                    }}
                  />
                </div>
                <div className="skill-item__name">
                  <h6>{skill.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="seperator" />
        <div className="aboutMe__education">
          <h1 className="title">EDUCATION & EXPERIENCE</h1>
          <div className="aboutMe__education__content">
            <div
              className="aboutMe__education__content__left"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              {educationList.slice(0, 3).map((el, i) => (
                <div className="content" key={i}>
                  <div className="content__icon">
                    <FontAwesomeIcon className="i" icon={faBriefcase} />
                  </div>
                  <h5 className="content__date">{el.date}</h5>
                  <h2 className="content__title">
                    {el.title} <span>{el.subTitle}</span>
                  </h2>
                  <p className="content__overview">{el.content}</p>
                </div>
              ))}
            </div>
            <div
              className="aboutMe__education__content__right"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              {educationList.slice(3).map((el, i) => (
                <div className="content" key={i}>
                  <div className="content__icon">
                    <FontAwesomeIcon className="i" icon={faBriefcase} />
                  </div>
                  <h5 className="content__date">{el.date}</h5>
                  <h2 className="content__title">
                    {el.title} <span>{el.subTitle}</span>
                  </h2>
                  <p className="content__overview">{el.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
