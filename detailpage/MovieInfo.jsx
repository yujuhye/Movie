import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieData from '../contents/movieDB.json';
import '../css/movieInfo.css';
import StillCut from "../utile/StillCut";
import ReviewBox from "../detailpage/ReviewBox";
import TotalReviewList from "./TotalReviewList";



const MovieInfo = () => {
    const { movieCode } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(null);

    useEffect(() => {

        const codeAsNumber = parseInt(movieCode);

        if (!isNaN(codeAsNumber)) {

            const paddedCode = (codeAsNumber).toString().padStart(4, '0');
            console.log('movieCode:', movieCode);
            console.log('codeAsNumber:', codeAsNumber);
            console.log('paddedCode:', paddedCode);

            if (movieData[paddedCode]) {
                setMovieInfo(movieData[paddedCode]);
                setCurrentMovieIndex(codeAsNumber);
            }
        }
    }, [movieCode]);


    // UI
    return (
        <>
            <div className="movieContainer">
                {movieInfo && (
                    <>
                        <div className="poster">
                            <img src={movieInfo.poster} alt="" />
                        </div>
                        {/* <p>현재 영화 코드: {currentMovieIndex}</p> */}

                        <div className="info">
                            <div className="title">
                                <p>
                                    {movieInfo.title}
                                    {/* 평균별점합산표시자리 타이틀 옆 표시*/}
                                </p>
                            </div>
                            <p>장르 | {movieInfo.genre1}</p>
                            <p>감독 | {movieInfo.director}</p>
                            <p>출연진 : {movieInfo.actor}</p>
                            <p>개봉일 : {movieInfo.release}</p>
                            <p>관람이용가 : {movieInfo.filmrating}세</p>
                            <p>러닝타임 : {movieInfo.runningtime}분</p>
                        </div>
                        <div className="story">
                            <p >{movieInfo.story} </p>
                        </div>
                    </>
                )}

                <div className="stillCut">
                    {movieInfo && <StillCut stills={movieInfo.stills} />}
                </div>

            </div>

            <div>
                <ReviewBox movieCode={movieCode} />
            </div>
        </>
    );
}

export default MovieInfo;