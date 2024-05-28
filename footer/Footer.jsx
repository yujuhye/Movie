// Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css"; // 스타일 파일을 import

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>파워레인조</h3>
                    <p><Link to="/homepage">당신의 영화 정보 허브</Link></p>
                </div>
                <div className="footer-section">
                    <h3>이용약관</h3>
                    <ul>
                        <li><Link to="/termspage">서비스 이용 약관</Link></li>
                        <li><Link to="/privacy">개인정보 처리 방침</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>고객 지원</h3>
                    <ul>
                        <li><Link to="/supportfaq">자주 묻는 질문</Link></li>
                        <li><Link to="/supportcontact">문의하기</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 파워레인조. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
