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
    count: 8,
    content: "Months of",
    sub: "Learning",
  },
  {
    count: 5,
    content: "Completed",
    sub: "Projects",
  },
  {
    count: 925,
    content: "Toeic",
    sub: "Score",
  },
  {
    count: 0,
    content: "Years of",
    sub: "Experience",
  },
];

const educationList = [
  {
    date: "2021",
    title: "Trần Hưng Đạo",
    subTitle: "Hight School",
    content:
      "Sau khi tốt nghiệp cấp ba bản thân mình nhận thấy vẫn còn rất mông lung với tương lai bản thân sau này và đặt rất ít nguyện vọng. Kết quả là mình đã trượt hết tất cả nguyện vọng đăng ký.",
  },
  {
    date: "2021 - 2022",
    title: "College of Technology and trading",
    subTitle: "College",
    content:
      "Mình đăng ký vào trường hiện tại chủ yếu với dự định học cao đẳng rồi liên thông lên đại học và cũng vì học phí các trường cao đẳng rẻ hơn rất nhiều. Lúc đầu mình đăng ký ngành Logistics chứ không phải ngành IT nhưng khi mình được học thử lớp C++, HTML , CSS mình cảm thấy ngành IT có gì đó hợp hơn với mình. Sau đó mình quyết định xin chuyển sang ngành IT từ đó.",
  },
  {
    date: "2022/2/16",
    title: "Quan Truong Minh Teacher",
    subTitle: "Toeic Course",
    content:
      "Trong quãng thời gian năm nhất mình nhận thấy tiếng anh thật sự rất quan trọng với ngành học của mình lên đã không ngần ngại đăng ký một lớp toeic để thi lấy chứng chỉ. Trong thời gian ôn luyện mình đã làm hơn 12 quyển để từ dễ đến khó và cuối cùng đã đạt được điểm số 925 Toeic!!!",
  },
  {
    date: "2022/7/12",
    title: "Web Dev Learning",
    subTitle: "Learning Course",
    content:
      "Sau khi tìm hiểu sơ qua về ngành mình quyết định theo hướng FE Developer , một phần vì thấy thú vị và cũng có đầy đủ roadmap tài liệu để theo học. Mình bắt đầu từ khóa The Complete JavaScript Course 2023: From Zero to Expert! của thầy Jonas trên udemy , lúc đó do chưa tìm hiểu kỹ lên mình nhảy học thẳng JS mà bỏ qua HTML,CSS",
  },
  {
    date: "2022/10/2",
    title: "Learning ReactJS",
    subTitle: "React Js",
    content:
      "Sau khi đã nắm được cơ bản của JavaScript mình quyết định học lên JavaScript nâng cao kèm theo đó là học về ReactJs qua khóa của anh Sơn Đặng F8",
  },
  {
    date: "2023/2/15",
    title: "Learning NodeJs , Express and MongoDB",
    subTitle: "Basic BackEnd",
    content:
      "Sau đợt tết mình quyết định học thêm cơ bản về BackEnd để có thể hiểu rõ hơn cách API hoạt động và cũng như là muốn tạo cho mình một MERN App. Mình đã học qua Node JS , Express , MongoDB qua khóa The Web Developer Bootcamp của thầy Colt Steel cũng như kết hợp làm project để học thêm về cách BackEnd Hoạt Động",
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
