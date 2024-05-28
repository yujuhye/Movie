import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getMyMemInfo } from '../utile/membersUtiles';
import { setCurrentLoginedSessionID } from './session';
import '../css/signin.css';

const SignIn = (props) => {

    //hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');

    const navigate = useNavigate();

    //handler
    const signInBtnClickHandler = () => {
        console.log('[SignIn] SIGNIN BUTTON CLICKED!!');
        

        let myMemInfo = getMyMemInfo(uId);
        if (myMemInfo !== undefined && myMemInfo.uPw === uPw) {
            
            alert('로그인 되었습니다');
            setCurrentLoginedSessionID(uId);

            props.setIsLogined(true);

            navigate('/');

        } else {
            alert('id 또는 pw가 일치하지 않습니다');

            props.setIsLogined(false);

        }

        initInputField();

    }

    const resetBtnClickHandler = () => {
        console.log('[SignIn] RESET BUTTON CLICKED!!');

        initInputField();

    }

    const initInputField = () => {
        console.log('[SignIn] initInputField() CALLED!!');

        setUId('');
        setUPw('');

    }

    const uIdChangeHandler = (e) => {
        console.log('uIdChangeHandler() CALLED!!');
        setUId(e.target.value);

    }

    const uPwChangeHandler = (e) => {
        console.log('uPwChangeHandler() CALLED!!');
        setUPw(e.target.value);

    }
    
    return (
        <>
            <div id="signInWrap">
                <input type="text" name="uId" value={uId} onChange={uIdChangeHandler} placeholder="Input user id"  autoFocus />
                <br />
                <input type="password" name="uPw" value={uPw} onChange={uPwChangeHandler} placeholder="Input user pw" />
                <br />
                <input type="button" value="SIGN IN" onClick={signInBtnClickHandler} />
                <input type="button" value="RESET" onClick={resetBtnClickHandler} />

            </div>
        </>
    );
}

export default SignIn;