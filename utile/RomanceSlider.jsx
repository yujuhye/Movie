import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import movieData from '../contents/movieDB.json';
import Slider from "react-slick"; 
import { Link } from "react-router-dom";
import "../css/genreSlider.css"; 
// import { RightOutlined, LeftOutlined } from "@ant-design/icons"


// const NextArrow = ({onClick}) => {
//     return(
//         <div className="nextArrow" onClick={onClick}>
//             <RightOutlined 
            
//             />
//         </div>
//     );
// }

// const PrevArrow = ({onClick}) => {
//     return(
//         <div className="PrevArrow" onClick={onClick}>
//             <LeftOutlined
//             />
//         </div>
//     );
// }

const CurSlider = () => {

    const [data, setData] = useState([]);
    const [imageSize, setImageSize] = useState({ width: 180, height: 250 });

    useEffect(() => {
    setData(Object.values(movieData));
    }, []);


        const renderMovieLinks = () => {
            return (
                data?.length ? (
                    data.slice(5, 11).map((item, index) => ( 
                        <div className="genreContainer" key={index + 6} style={{width:'180px', height:'400px'}}>
                            <li className="listContainer" style={imageSize}>
                                <Link className="genreList" to={`/movieInfo/${index + 6}`}>
                                    <img
                                        className="gImg"
                                        style={imgStyle}
                                        src={item.poster}
                                        alt={`포스터 이미지 ${index + 6}`}
                                    />
                                    <p className="gTitle">{item.title}</p>
                                </Link>
                            </li>
                        </div>
                    ))
                ) : (
                    <li>NotFound</li>
                )
            );
        };

    let imgStyle = {
        width:"200px",
        height:"280px",
        borderRadius:"8px",
    }

    const settings = {
        dots: false, 
        infinite: false, 
        speed: 500, 
        slidesToShow: 5, 
        slidesToScroll: 1, 
        
    };

    return(
            <ul className="gSilder">
                <Slider {...settings} >
                    {renderMovieLinks()}
                </Slider>
            </ul>
    );
}

export default CurSlider;
