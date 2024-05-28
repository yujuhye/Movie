// PrivacyTermsPage.jsx

import React from "react";

const Privacy = () => {
    return (
        <div style={{margin:'30px 0'}}>
            <h2>개인정보 처리방침</h2>

            <section>
                <h3>1. 수집하는 개인정보 항목</h3>
                <p>
                    회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다:
                    - 이용자의 이름, 이메일 주소, 전화번호 등
                    - 서비스 이용 기록, 접속 로그, 쿠키, IP 주소 등
                </p>
            </section>

            <section>
                <h3>2. 개인정보의 수집 및 이용 목적</h3>
                <p>
                    회사는 수집한 개인정보를 다음 목적을 위해 활용합니다:
                    - 서비스 제공, 유지, 개선
                    - 신규 서비스 개발 및 기존 서비스 개선
                    - 이용자에게 최적화된 컨텐츠 및 광고 제공
                </p>
            </section>

            <section>
                <h3>3. 개인정보의 보유 및 파기</h3>
                <p>
                    회사는 개인정보 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
                </p>
            </section>

            <section>
                <h3>4. 개인정보의 제공 및 공유</h3>
                <p>
                    회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                </p>
            </section>

            <section>
                <h3>5. 개인정보의 안전성 확보 조치</h3>
                <p>
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:
                    - 개인정보 암호화
                    - 접근 제한
                    - 보안 프로그램 설치 및 주기적인 갱신
                </p>
            </section>

            <section>
                <h3>6. 개인정보에 관한 이용자의 권리</h3>
                <p>
                    이용자는 회사에게 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제 등의 요청을 할 수 있습니다.
                </p>
            </section>

            <section>
                <h3>7. 개인정보 관리책임자 및 연락처</h3>
                <p>
                    회사는 개인정보 관리책임자를 지정하여 개인정보 관련 문의에 대응합니다.
                    관리책임자와 연락을 원하는 경우 아래 연락처를 이용하세요.
                    - 이름: [이름]
                    - 이메일: [이메일 주소]
                </p>
            </section>

            <section>
                <h3>8. 개인정보 처리방침의 변경</h3>
                <p>
                    개인정보 처리방침의 내용 추가, 삭제 및 수정이 있을 경우 본 페이지를 통해 공지합니다.
                </p>
            </section>

            <section>
                <h3>9. 기타</h3>
                <p>
                    그 외 개인정보 처리에 관한 상세한 사항은 관련 법령 및 회사의 내부 방침에 따릅니다.
                </p>
            </section>

            <p>
                이용자는 본 개인정보 처리방침을 숙지하고 서비스를 이용함으로써 이를 모두 동의한 것으로 간주됩니다.
            </p>
        </div>

    );
};

export default Privacy;