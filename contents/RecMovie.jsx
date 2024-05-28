import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import movieData from './movieDB.json'; // JSON 파일 import
import "../css/recmovie.css"; // CSS 파일 import

const RecMovie = () => {
    const [data, setData] = useState([]);
    const [imageSize, setImageSize] = useState({ width: 220, height: 315 });

    useEffect(() => {
        setData(Object.values(movieData));
    }, []);

    useEffect(() => {
        const imgElement = document.querySelector('.tImg');

        if (imgElement) {
            const imgWidth = imgElement.clientWidth;
            const imgHeight = imgElement.clientHeight;

            setImageSize({ width: imgWidth, height: imgHeight });
        }
    }, []);

    const slicedData = data.slice(0, 25);

    return (
        <div className="tableContainer">
            {slicedData?.length ? (
                slicedData.map((item, index) => (
                    <div className="sliderContainer" key={index} style={imageSize}>
                        <Link className="list" to={`/movieInfo/${index + 1}`}>
                            <img
                                    className="pImg"
                                    src={item.poster}
                                    alt={`포스터 이미지 ${index}`}
                                />
                                <p className="mTitle">{item.title}</p>
                        </Link>
                    </div>
                ))
            ) : (
                <p>데이터 X</p>
            )}
        </div>
    );
};

export default RecMovie;