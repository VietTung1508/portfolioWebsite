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

export const works = [
  {
    id: 1,
    img: [tmovix, tmovix1, tmovix2, tmovix3, tmovix4, tmovix5],
    name: "tMovix",
    overview:
      "Đây là 1 website xem phim kèm với những tính năng như là tìm phim , xem trailer , phân trang . Mình build website này chủ yếu để xem xem phim nào đang trending để có thể rủ bạn bè cùng đi xem. Đây là dự án gần đây nhất của mình!",
    type: "Movie App",
    frontEnd: "React ,SCSS",
    backEnd: "The Movie Database (TMDB)API",
    tags: ["react", "scss", "axios", "responsive", "api", "movie"],
    linkSrcCode: "https://github.com/VietTung1508/tMovixApp",
    link: "https://tmovix.netlify.app/",
  },
  {
    id: 2,
    img: [lofi, lofi1, lofi2, lofi3, lofi4, lofi5],
    name: "Lofi.co",
    overview:
      "Website này được mình lấy cảm hứng từ trang Lofi.co , mình đã tự tay clone lại nó với mục đích chủ yếu là để code ra những tình năng và dùng nó mà bên Lofi.co nếu muốn dùng sẽ mất phí. Và đây cũng là dự án React đầu tiên mình làm sau khi học xong khóa ReactJs trên F8.",
    type: "Lofi Chill",
    frontEnd: "React, SCSS",
    backEnd: "None",
    tags: ["react", "scss", "lofi", "music"],
    linkSrcCode: "https://github.com/VietTung1508/lofiwebsite",
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
      "Website này mình build ra chủ yếu để học thêm về React Redux,cách tạo giở hàng,cách thêm, bớt,sửa,xóa một sản phẩm trong giở hàng,cách design 1 website ecommerce . Đây là dự án thứ hai của mình chỉ sau dự án Lofi trước đó!!!",
    type: "Ecommerce",
    frontEnd: "React ,SCSS",
    backEnd: "None",
    tags: ["react", "scss", "ecommerce", "responsive", "fashion"],
    linkSrcCode: "https://github.com/VietTung1508/haruki-ecomerce-website",
    link: "https://harukijp.netlify.app/",
  },
  {
    id: 4,
    img: [haruki],
    name: "Tung's Portfolio",
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt vel tempora soluta fuga veritatis! Nihil, dicta nobis labore nemo aliquid doloribus rem, omnis fuga, officia blanditiis minima possimus in maiore Quidem, corrupti. Harum magnam necessitatibus officia, quos vero recusandae alias expedita itaque aperiam doloremque autem maiores, est sapiente, obcaecati ",
    type: "Portfolio",
    frontEnd: "SCSS ,React",
    backEnd: "None",
    tags: ["react", "scss", "portfolio", "responsive"],
    linkSrcCode: "https://github.com/VietTung1508/lofiwebsite",
    link: "https://harukijp.netlify.app/",
  },
];
