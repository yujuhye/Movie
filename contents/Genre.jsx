import React, { useState } from "react";
import ActionSlider from "../utile/ActionSlider";
import RomanceSlider from "../utile/RomanceSlider";
import FantasySlider from "../utile/FantasySlider";
import ThrillerSlider from "../utile/ThrillerSlider";
import ComedySlider from "../utile/ComedySlider";
import HorrorSlider from "../utile/HorrorSlider";
import SfSlider from "../utile/SfSlider";
import '../css/genre.css';


const Genre = () => {
    const [collectGenre, setCollectGenre] = useState('전체'); 

    const collectGenreEventHandler = (genre) => {
        setCollectGenre(genre);
    }
    return(
        
        <div className="gContainer">
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>액션</p>
                <ActionSlider />
            </div>
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>로맨스</p>
                <RomanceSlider />
            </div>
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>판타지</p>
                <FantasySlider />
            </div>
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>스릴러</p>
                <ThrillerSlider />
            </div>
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>코미디</p>
                <ComedySlider />
            </div>
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>공포</p>
                <HorrorSlider />
            </div>
            <div className="gOneLine">
                <p className="genreTitle"><span className="I">I</span>SF</p>
                <SfSlider />
            </div>
        </div>
    
    );
}

export default Genre;