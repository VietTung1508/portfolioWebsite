import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routess from "./config/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./components/header/Header";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="App"
      data-aos-easing="ease"
      data-aos-duration="1200"
      data-aos-delay="0"
    >
      <BrowserRouter>
        <Header />
        <Routess />
      </BrowserRouter>
    </div>
  );
}

export default App;
