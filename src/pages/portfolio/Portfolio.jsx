import PageHeader from "../../components/pageHeader/PageHeader";
import "./portfolio.scss";
import noProject from "../../assets/nopj.png";

import { works } from "../../data";

import { useState } from "react";
import Modal from "../../components/modal/Modal";

function Portfolio() {
  const [sort, setSort] = useState("All");
  const [items, setItems] = useState(works);

  const handleSortApi = () => {
    setSort("api");
    setItems(works.filter((el) => el.tags.includes("api")));
  };

  const handleSortReact = () => {
    setSort("react");
    setItems(works.filter((el) => el.tags.includes("react")));
  };

  const handleSortJs = () => {
    setSort("js");
    setItems(works.filter((el) => el.tags.includes("js")));
  };
  const handleSortAll = () => {
    setSort("All");
    setItems(works);
  };

  const handleCard = (el) => {
    const modal = document.querySelector(`#modal_${el.id}`);
    const overlay = document.querySelector(`#overlay_modal_${el.id}`);
    modal.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  return (
    <div>
      <PageHeader />
      <div className="portfolio container">
        <ul className="sorts" data-aos="fade-up" data-aos-duration="1200">
          <li
            className={`sort ${sort === "js" ? "active" : ""}`}
            onClick={handleSortJs}
          >
            CSS/JAVASCRIPT
          </li>
          <li
            className={`sort ${sort === "react" ? "active" : ""}`}
            onClick={handleSortReact}
          >
            SCSS/REACTJS
          </li>
          <li
            className={`sort ${sort === "api" ? "active" : ""}`}
            onClick={handleSortApi}
          >
            RESTFUL API
          </li>
          <li
            className={`sort ${sort === "All" ? "active" : ""}`}
            onClick={handleSortAll}
          >
            ALL
          </li>
        </ul>
        {items.length > 0 ? (
          <div className="portfolio__cards">
            {items.map((el, i) => (
              <div
                key={i}
                className="portfolio__cards__card"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay={i < 2 ? i * 100 : i * 0}
                onClick={() => handleCard(el)}
              >
                <div style={{ backgroundImage: `url(${el.img[0]})` }} />
                <h3>{el.type}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="noProjects">
            <h2>Upcoming Soon...</h2>
            <img src={noProject} alt="" />
          </div>
        )}
      </div>
      {items.map((el, i) => (
        <Modal key={i} active={false} item={el} id={`modal_${el.id}`} />
      ))}
    </div>
  );
}

export default Portfolio;
