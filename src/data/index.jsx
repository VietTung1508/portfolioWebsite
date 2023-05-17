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
import memories from "../assets/memories.png";
import memories1 from "../assets/memories1.png";
import memories2 from "../assets/memories2.png";
import memories3 from "../assets/memories3.png";
import memories4 from "../assets/memories4.png";
import memories5 from "../assets/memories5.png";
import book1 from "../assets/book1.PNG";
import book2 from "../assets/book2.PNG";
import book3 from "../assets/book3.PNG";
import book4 from "../assets/book4.PNG";
import book5 from "../assets/book5.PNG";
import book6 from "../assets/book6.PNG";
import book7 from "../assets/book7.PNG";
import book8 from "../assets/book8.PNG";
import book9 from "../assets/book9.PNG";
import book10 from "../assets/book10.PNG";
import book11 from "../assets/book11.PNG";
import book12 from "../assets/book12.PNG";
import book13 from "../assets/book13.PNG";
import book14 from "../assets/book14.PNG";
import book15 from "../assets/book15.PNG";
import book16 from "../assets/book16.PNG";
import book17 from "../assets/book17.PNG";
import book18 from "../assets/book18.PNG";
import html from "../assets/html.png";
import sass from "../assets/sass.png";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import axios from "../assets/axios.png";
import github from "../assets/github.png";
import responsive from "../assets/responsive.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongoDB from "../assets/mongoDB.png";

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
      "Đây là 1 website xem phim kèm với những tính năng như là tìm phim, xem phim ngắn và dài tập, phân trang, cách gọi api với axios. Mình build website này để học thêm cách gọi api và cách dùng axios",
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
      "Website này được mình lấy cảm hứng từ trang Lofi.co , mình đã tự tay clone lại website này với với mục đích ban đầu là để cho vui và mình cũng đã học được nhiều về Sass qua dự án này.",
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
      "Website này mình build ra chủ yếu để học thêm về React Redux,cách tạo giở hàng,cách thêm, bớt,sửa,xóa một sản phẩm trong giở hàng,cách design 1 website ecommerce.",
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
  {
    id: 5,
    img: [memories, memories1, memories2, memories3, memories4, memories5],
    name: "Memories",
    overview:
      "Đây là dự án mình lấy cảm hứng từ pinterest và cũng có thể nói đây là dự án lớn nhất từ trước tới giờ của mình. Api của dự án này được mình viết thông quá express và được lưu ở mongodb Atlas. Website này bao gồm các tính năng CRUD, đăng nhập, đăng ký , quên mật khẩu, OTP , ủy quyền , xác thực, tìm kiếm , bình luận, thích ...",
    type: "Social App",
    frontEnd: "SCSS ,React",
    backEnd: "Express , MongoDB, NodeJs",
    tags: [
      "react",
      "scss",
      "nodejs",
      "express",
      "mongodb",
      "social",
      "responsive",
    ],
    link: "https://memories1508.vercel.app/",
  },
  {
    id: 6,
    img: [
      book1,
      book2,
      book3,
      book4,
      book5,
      book6,
      book7,
      book8,
      book9,
      book10,
      book11,
      book12,
      book13,
      book14,
      book15,
      book16,
      book17,
      book18,
    ],
    name: "Viz Media",
    overview:
      "Đây là dự án bán sách mình xây dựng với công nghệ mới là NextJs tuy dự án vẫn chưa được chuẩn hóa sale nhưng về cơ bản thì website này có xác thực giữa admin và người dùng , có thể đặt hàng, duyệt hàng vầ thêm các sản phẩm qua admin dashboard",
    type: "Ecommerce",
    frontEnd: "ReactJS, Tailwind Css, Sass, Mui",
    backEnd: "API Route in NextJS",
    tags: ["react", "scss", "next", "mongodb", "ecommerce"],
    link: "https://vizmedia.vercel.app/",
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
    id: 10,
    img: responsive,
    name: "responsive",
  },
  {
    id: 11,
    img: nodejs,
    name: "Node js",
  },
  {
    id: 12,
    img: express,
    name: "Express",
  },
  {
    id: 13,
    img: mongoDB,
    name: "Mongo db",
  },
];
