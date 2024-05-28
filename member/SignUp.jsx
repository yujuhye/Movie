import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getMemberDB, setMemberDB } from '../utile/membersUtiles';
import { validateUserData, validateDelUId } from '../utile/membersUtiles';
import { getDateTime } from '../utile/membersUtiles';
import '../css/signup.css'; 

const SignUp = () => {
    //hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const navigate = useNavigate();

    //handler
    const signUpBtnClickHandler = () => {
        console.log('[SignUp] SIGNUP BUTON CLICKED!!');

        let chkMemberAvailability = validateUserData(uId, uPw, uMail, uPhone);
        let chkDelMember = validateDelUId(uId);

        if (chkMemberAvailability && chkDelMember) {
            let memberDB = getMemberDB();
            if (memberDB === null) {
                let newMember = {
                    [uId]: {
                        'uPw': uPw,
                        'uMail': uMail,
                        'uPhone': uPhone,
                        'uRegDate': getDateTime(),
                        'uModDate': getDateTime(),
                    }
                }

                setMemberDB(newMember);

            } else {
                let members = JSON.parse(memberDB);
                members[uId] = {
                    'uPw': uPw,
                    'uMail': uMail,
                    'uPhone': uPhone,
                    'uRegDate': getDateTime(),
                    'uModDate': getDateTime(),
                };

                setMemberDB(members);

            }

            alert(`${uId}님 환영합니다`);

            navigate('/member/signin');

        } else {

            alert('데이터가 이상하거나 중복ID입니다. 다시 확인하세요.');

        }

    }
    const resetBtnClickHandler = () => {
        console.log('[SignUp] RESET BUTON CLICKED!!');

        setUId('');
        setUPw('');
        setUMail('');
        setUPhone('');

    }

    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler() CALLED!!');
        setUId(e.target.value);
    }
    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler() CALLED!!');
        setUPw(e.target.value);
    }
    const uMailChangeHandler = (e) => {
        console.log('uMailChangeHandler() CALLED!!');
        setUMail(e.target.value);
    }
    const uPhoneChangeHandler = (e) => {
        console.log('uPhoneChangeHandler() CALLED!!');
        setUPhone(e.target.value);
    }


    return (
        <>
            <div id="signUpWrap">
                <input type="text" name="uId" value={uId} onChange={uIdChangeHandler} placeholder="Input user ID" autoFocus />
                <br />
                <input type="password" name="uPw" value={uPw} onChange={uPwChangeHandler} placeholder="Input user PW" />
                <br />
                <input type="email" name="uMail" value={uMail} onChange={uMailChangeHandler} placeholder="Input user MAIL" />
                <br />
                <input type="text" name="uPhone" value={uPhone} onChange={uPhoneChangeHandler} placeholder="Input user PHONE" />
                <br />
                <input type="button" value="SIGN UP" onClick={signUpBtnClickHandler} />
                <input type="button" value="RESET" onClick={resetBtnClickHandler} />
            </div>
        </>
    );
}

export default SignUp;