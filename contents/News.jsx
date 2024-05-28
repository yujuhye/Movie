import React from "react";
import "../css/news.css"

const News = () => {
    const newsList = [
        "촬영을 위해 물까지 끊었다? 배우 임시완 인터뷰",
        "아카데미 위너들과 돌아온 명탐정 포와로의 명품 추리",
        "MZ세대라면 '좋아요' 누를, 리얼한 유튜버 이야기",
        "키노의 【최애의 히어로】는? (내 최애 등장 주의)",
        "'형만 믿어' 다시 돌아온 프랜차이즈 액션",
    ];

    // Splitting the news titles into chunks of 5 titles each
    const chunkSize = 5;
    const newsChunks = [];
    for (let i = 0; i < newsList.length; i += chunkSize) {
        newsChunks.push(newsList.slice(i, i + chunkSize));
    }

    return (
        <div className="news_Wrap">
            <p>New! MovieNews</p>
            {newsChunks.map((chunk, index) => (
                <div key={index} className="newsLine">
                    {chunk.map((title, i) => (
                        <a key={i} href={`#${i}`} style={{ textDecoration: 'underline' }}>
                            {title} <br />
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default News;
