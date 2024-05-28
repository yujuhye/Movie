// ContactPage.jsx

import React from "react";

const ContactPage = () => {
    return (
        <div style={{margin:'30px 0'}}>
            <h2>문의하기</h2>

            <section>
                <h3>문의 양식</h3>
                <form>
                    <label htmlFor="name">이름:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">이메일:</label>
                    <input type="email" id="email" name="email" required />

                    <button type="submit">전송</button>
                </form>
            </section>

            <section>
                <h3>문의처</h3>
                <p>
                    이메일: support@powercine.com<br />
                    전화번호: 010-1234-5678
                </p>
            </section>
        </div>
    );
};

export default ContactPage;
