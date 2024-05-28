import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieData from './movieDB.json'; // JSON 파일 import
import "../css/curmovie.css"; // CSS 파일 import

const RecMovie = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Object.values(movieData));
    }, []);

    return (
        <div className="movieTable">
            {data.length ? (
                data.slice(35).map((item, index) => (
                    <div className="movieItem" key={index + 36}>
                        <Link className="movieLink" to={`/movieInfo/${index + 36}`}>
                            <img
                                className="moviePoster"
                                src={item.poster}
                                alt={`포스터 이미지 ${index + 36}`}
                            />
                            <p className="movieTitle">{item.title}</p>
                        </Link>
                    </div>
                ))
            ) : (
                <p className="noDataMessage">데이터가 없습니다.</p>
            )}
        </div>
    );
};

export default RecMovie;