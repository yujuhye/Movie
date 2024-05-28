import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { getMemberDB, setMemberDB } from '../utile/membersUtiles';
import { getMyMemInfo, setMyMemInfo } from '../utile/membersUtiles';
import { getDateTime } from '../utile/membersUtiles';
import { createDelMemberDB, getDelMemberDB, setDelMemberDB } from '../utile/membersUtiles';
import { getCurrentLoginedSessionID, setCurrentLoginedSessionID } from './session';
import '../css/modify.css';

const Modify = (props) => {
    //hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const oriUPw = useRef('');
    const oriUMail = useRef('');
    const oriUPhone = useRef('');
    const oriURegDate = useRef('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log('[Modify] useEffect!!');

        let myMemInfo = getMyMemInfo(getCurrentLoginedSessionID());
        console.log('>>>>> ', myMemInfo);
        setUId(getCurrentLoginedSessionID());
        setUPw(myMemInfo.uPw);
        setUMail(myMemInfo.uMail);
        setUPhone(myMemInfo.uPhone);

        oriUPw.current =  myMemInfo.uPw;
        oriUMail.current = myMemInfo.uMail;
        oriUPhone.current = myMemInfo.uPhone;
        oriURegDate.current = myMemInfo.uRegDate;

    }, []);

    //handler
    const modifyBtnClickHandler = () => {
        console.log('[Modify] MODIFY BUTON CLICKED!!');

        let myMemInfo = {
            'uPw': uPw,
            'uMail': uMail,
            'uPhone': uPhone,
            'uRegDate': oriURegDate.current,
            'uModDate': getDateTime(),
        }
        setMyMemInfo(getCurrentLoginedSessionID(), myMemInfo);

        alert('MODIFY SUCCESS!!');

        navigate('/');

    }
    const resetBtnClickHandler = () => {
        console.log('[Modify] RESET BUTON CLICKED!!');

        setUPw(oriUPw.current);
        setUMail(oriUMail.current);
        setUPhone(oriUPhone.current);

    }

    const deleteBtnClickHandler = () => {
        console.log('[Modify] DELETE BUTTON CLICKED!!');

        let result = window.confirm('정말 탈퇴 하시겠습니까?');

        if (result) {
            let memberDB = getMemberDB();
            let members = JSON.parse(memberDB);
            delete members[getCurrentLoginedSessionID()];
            
            setMemberDB(members);
    
            alert('DELETE SUCCES!!');

            // member delete trigger
            let delMemberDB = getDelMemberDB();
            if (delMemberDB === null)
                createDelMemberDB();
            
            delMemberDB = getDelMemberDB();
            let delMembers = JSON.parse(delMemberDB);
            delMembers.push(getCurrentLoginedSessionID());
            setDelMemberDB(delMembers);

            setCurrentLoginedSessionID();

            console.log('TRIGGER UPDATE SUCCESS!!');

            props.setIsLogined(false);

            navigate('/');
            
        } else {
            alert('DELETE CANCELED!!');

        }

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
            <div id="modifyWrap">
                <input type="text" name="uId" value={uId} disabled readOnly onChange={uIdChangeHandler} />
                <br />
                <input type="password" name="uPw"  value={uPw} onChange={uPwChangeHandler} placeholder="Input user PW" autoFocus />
                <br />
                <input type="email" name="uMail"  value={uMail} onChange={uMailChangeHandler} placeholder="Input user MAIL" />
                <br />
                <input type="text" name="uPhone"  value={uPhone} onChange={uPhoneChangeHandler} placeholder="Input user PHONE" />
                <br />
                <input type="button" value="MODIFY" onClick={modifyBtnClickHandler} />
                <input type="button" value="RESET" onClick={resetBtnClickHandler} />
                <input type="button" value="DELETE" onClick={deleteBtnClickHandler} />
            </div>
        </>
    );
}

export default Modify;