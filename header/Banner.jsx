import React from "react";
import YouTube from "react-youtube";
import '../css/Banner.css'

const Banner = () => {
    const videoOpts = {
        width: "1000px",
        height: "500px",
        playerVars: {
            autoplay: 1,
            modestbranding: 0,
            loop: 1,
            
        },
    };

    return (
        <div className="banner-container">
            
            <div className="youtube_Video">
                <YouTube
                    className="youtube"
                    videoId="b0yAOYIvP1Y"
                    opts={videoOpts}
                    onReady={(e) => {
                        e.target.mute();
                    }}
                />
                <div className="blackBox"></div>
                <div className="overlayText">  쿵푸팬더 <br/> 4월 10일 대개봉</div>
            </div>

        </div>
    );
};

export default Banner;
