import React, { useEffect, useState } from "react"; // eslint-disable-line no-unused-vars
import movieData from '../contents/movieDB.json';
import Slider from "react-slick"; 
import { Link } from "react-router-dom";
import { RightOutlined, LeftOutlined } from "@ant-design/icons"
import "../css/mainSlider.css"; 


const NextArrow = ({onClick}) => {
    return(
        <div className="nextArrow" onClick={onClick}>
            <RightOutlined 
            
            />
        </div>
    );
}

const PrevArrow = ({onClick}) => {
    return(
        <div className="PrevArrow" onClick={onClick}>
            <LeftOutlined
            />
        </div>
    );
}

const CurSlider = () => {

    const [data, setData] = useState([]);
    const [imageSize, setImageSize] = useState({ width: 220, height: 300 });

    useEffect(() => {
    setData(Object.values(movieData));
    }, []);

    useEffect(() => {
        const imgElement = document.querySelector('.tImg');
    
        if (imgElement) {
          // 이미지의 크기를 가져와서 상위 요소들에게 적용
            const imgWidth = imgElement.clientWidth;
            const imgHeight = imgElement.clientHeight;
    
            setImageSize({ width: imgWidth, height: imgHeight });
        }
        }, [data]);

        const renderMovieLinks = () => {
            return (
                data?.length ? (
                    // 데이터가 존재할 때
                    data.slice(35).map((item, index) => (  // 26번째부터 출력
                        <div className="slideContainer" key={index + 36} style={{height:'400px'}}>
                            <li className="liContainer" style={imageSize}>
                                <Link className="sList" to={`/movieInfo/${index + 36}`}>
                                    <img
                                        style={imgStyle}
                                        className="tImg"
                                        src={item.poster}
                                        alt={`포스터 이미지 ${index + 36}`}
                                    />
                                    <p className="title">{item.title}</p>
                                </Link>
                            </li>
                        </div>
                    ))
                ) : (
                    <li>데이터 X</li>
                )
            );
        };

    let imgStyle = {
        width:"225px",
        height:"320px",
        borderRadius:"8px",

    }

    const settings = {
        dots: false, // 점 표시 여부
        infinite: false, // 무한 반복 여부
        speed: 500, // 전환 속도
        slidesToShow: 3.5, // 보여지는 슬라이드 개수
        slidesToScroll: 2, // 스크롤 시 이동하는 슬라이드 개수
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />, 
        
        
    };

    return(
            <ul className="mSilder">
                <Slider {...settings} >
                    {renderMovieLinks()}
                </Slider>
            </ul>
    );
}

export default CurSlider;
