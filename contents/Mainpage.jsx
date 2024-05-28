import React from "react";
// import { Link } from "react-router-dom";
// import movieData from './movieDB.json';
// import Slider from "react-slick"; 
import MainSlider from "../utile/MainSlider";
import CurSlider from "../utile/CurSlider";
import "../css/mainpage.css"; 
import Banner from "../header/Banner"
import Eventpage from "./Eventpage";
import News from "./News";

const Mainpage = () => {


    return (
        <> 
        <div className="mainBanner">
            <Banner />
        </div>
        <div className="mainSlider">
            <div className="recSlider">
              <p><span className="I">I</span>추천영화</p>
              <MainSlider className="slider" style={{heght:'360px'}} />
            </div>
            <div className="curSlider">
              <p><span className="I">I</span>현재상영작</p>
              <CurSlider className="slider" />
            </div>
        </div>

        <div className="eventDiv">
          <div className="news"><News /></div>
          <div className="eventpage"><Eventpage /></div>
        </div>

        </>

    );
};

export default Mainpage;