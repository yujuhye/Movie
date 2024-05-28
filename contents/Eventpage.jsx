import React, { useState, useEffect, useRef } from "react";
import '../css/slideShow.css'; // 슬라이드 쇼 스타일을 정의한 CSS 파일

const Eventpage = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        "https://m.dr-hong.co.kr/file_data/blackhong1/2020/10/08/83d0b83aea83a2b5e6c8a76ffdb35244.jpg",
        "https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2022/01/SSG%EB%8B%B7%EC%BB%B4_%EB%B3%B8%EB%AC%B8900.png",
        "https://static.ebs.co.kr/images/public/2022/07/4/18/25/59/6bf102c3-0ed7-46a7-96ee-deba135bafc6.jpg",
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/12/urbanbrush-20221211083128716336.jpg",
        "https://jhtschool.com/wp-content/uploads/2023/12/banner@2x-1.png"
        // 다른 이미지 URL들을 여기에 추가
    ];

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
        }, 3000); // 3초마다 이미지 변경 (1000 = 1초)

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [images.length]);

    return (
        <div className="slideshow-container">
            <div className="slides" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`slide-${index}`}
                        className="slide"
                    />
                ))}
            </div>

        </div>
    );
};

export default Eventpage;
