import haruki from "../assets/haruki.png";
import haruki1 from "../assets/haruki1.png";
import haruki2 from "../assets/haruki2.png";
import haruki3 from "../assets/haruki3.png";
import haruki4 from "../assets/haruki4.png";
import haruki5 from "../assets/haruki5.png";
import haruki6 from "../assets/haruki6.png";
import haruki7 from "../assets/haruki7.png";
import lofi from "../assets/lofi.png";
import lofi1 from "../assets/lofi1.png";
import lofi2 from "../assets/lofi2.png";
import lofi3 from "../assets/lofi3.png";
import lofi4 from "../assets/lofi4.png";
import lofi5 from "../assets/lofi5.png";
import tmovix from "../assets/tmovix.png";
import tmovix1 from "../assets/tmovix1.png";
import tmovix2 from "../assets/tmovix2.png";
import tmovix3 from "../assets/tmovix3.png";
import tmovix4 from "../assets/tmovix4.png";
import tmovix5 from "../assets/tmovix5.png";
import tmovix6 from "../assets/tmovix6.png";
import tmovix7 from "../assets/tmovix7.png";
import portfolio from "../assets/portfolio.png";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import html from "../assets/html.png";
import sass from "../assets/sass.png";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import git from "../assets/git.png";
import axios from "../assets/axios.png";
import github from "../assets/github.png";
import responsive from "../assets/responsive.png";

export const works = [
  {
    id: 1,
    img: [
      tmovix,
      tmovix1,
      tmovix2,
      tmovix3,
      tmovix4,
      tmovix5,
      tmovix6,
      tmovix7,
    ],
    name: "tMovix",
    overview:
      "Đây là 1 website xem phim kèm với những tính năng như là tìm phim, xem phim ngắn và dài tập, phân trang, cách gọi api với axios. Mình build website này để xem phim engsub cải thiện thêm vốn từ vựng bản thân!",
    type: "Movie App",
    frontEnd: "React ,SCSS",
    backEnd: "The Movie Database (TMDB)API , 2embed",
    tags: ["react", "scss", "axios", "responsive", "api", "movie"],
    link: "https://tmovix.netlify.app/",
  },
  {
    id: 2,
    img: [lofi, lofi1, lofi2, lofi3, lofi4, lofi5],
    name: "Lofi.co",
    overview:
      "Website này được mình lấy cảm hứng từ trang Lofi.co , mình đã tự tay clone lại website này với mục đích chủ yếu là để code ra những tình năng và dùng nó mà bên Lofi.co nếu muốn dùng sẽ mất phí. Và đây cũng là dự án React đầu tiên mình làm sau khi học xong khóa ReactJs trên F8.",
    type: "Lofi Chill",
    frontEnd: "React, SCSS",
    backEnd: "None",
    tags: ["react", "redux", "scss", "lofi", "music"],
    link: "https://viettunglofi.netlify.app/",
  },
  {
    id: 3,
    img: [
      haruki,
      haruki1,
      haruki2,
      haruki3,
      haruki4,
      haruki5,
      haruki6,
      haruki7,
    ],
    name: "Haruki",
    overview:
      "Website này mình build ra chủ yếu để học thêm về React Redux,cách tạo giở hàng,cách thêm, bớt,sửa,xóa một sản phẩm trong giở hàng,cách design 1 website ecommerce. Đây là dự án thứ hai của mình chỉ sau dự án Lofi web!!!",
    type: "Ecommerce",
    frontEnd: "React ,SCSS",
    backEnd: "None",
    tags: ["react", "redux", "scss", "ecommerce", "responsive", "fashion"],
    link: "https://harukijp.netlify.app/",
  },
  {
    id: 4,
    img: [portfolio, portfolio1, portfolio2, portfolio3, portfolio4],
    name: "Tung's Portfolio",
    overview:
      "Đây là website portfolio của mình , mình lấy cảm hứng từ themeforest và đã clone lại website này. Website này tổng hợp những dự án, kinh nghiệm và thông tin cá nhân của mình và sẽ được update liên tục khi có thông tin mới!",
    type: "Portfolio",
    frontEnd: "SCSS ,React",
    backEnd: "None",
    tags: ["react", "scss", "portfolio", "responsive"],
    link: "https://viettungportfolio.netlify.app/",
  },
];

export const skills = [
  {
    id: 1,
    img: html,
    name: "html",
  },
  {
    id: 2,
    img: css,
    name: "css",
  },
  {
    id: 3,
    img: js,
    name: "javascript",
  },
  {
    id: 4,
    img: sass,
    name: "sass",
  },
  {
    id: 5,
    img: react,
    name: "react",
  },
  {
    id: 6,
    img: redux,
    name: "redux",
  },
  {
    id: 7,
    img: axios,
    name: "axios",
  },
  {
    id: 8,
    img: github,
    name: "git hub",
  },
  {
    id: 8,
    img: git,
    name: "git",
  },
  {
    id: 8,
    img: responsive,
    name: "responsive",
  },
];
