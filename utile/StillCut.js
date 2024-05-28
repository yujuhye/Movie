import React, { useState } from "react";
import Slider from "react-slick";
import "../css/stillCut.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const StillCut = ({ stills }) => {
    const [isShow, setIsShow] = useState(false);
    const [selectedStill, setSelectedStill] = useState(null);

    const openModal = (index) => {
        setSelectedStill(index);
        setIsShow(true);
    };

    const closeModal = () => {
        setIsShow(false);
        setSelectedStill(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        vertical: false,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <div className="container">
            <div className="stillTitle">스틸컷</div>
            <Slider className="stillContainer" {...settings}>
                {stills.map((still, index) => (
                    <div key={index} className="img">
                        <a href="#none" onClick={() => openModal(index)}>
                            <img className="pic" src={still} alt={`Still Cut ${index + 1}`} />
                        </a>
                    </div>
                ))}
            </Slider>
            {/* Modal */}
            {isShow && (
                <div className="modal_bg" onClick={closeModal}>
                    <div className="modal">
                        <a href="#none">
                            <img src={stills[selectedStill]} alt={`Selected Still Cut`} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StillCut;