import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../css/header.css';

import { setCurrentLoginedSessionID } from '../member/session';

import { BsPersonAdd, BsPersonCircle, BsPersonDash, BsPersonBadge  } from "react-icons/bs";


const Header = (props) => {

    const navigate = useNavigate();

    const signOutClickHandler = () => {
        console.log('[Header] SIGN OUT CLICKED!!');

        setCurrentLoginedSessionID();
        props.setIsLogined(false);

        navigate('/');

    }

    return (
        <div className="logo">
            <Link to='/'><img src="/logo/logo.png" alt="" /></Link>
        
            <div className="memberMenu">
            {
                props.isLogined
                ?
                    <>
                        <Link className="memLinkA" to='/member/modify'><BsPersonBadge className="icon" size="20" />정보수정</Link>
                        <Link className="memLinkB" to='/' onClick={signOutClickHandler}><BsPersonDash className="icon" size="20" />로그아웃</Link>
                    </>
                :
                    <>
                        <Link className="memLinkC" to='/member/signup'><BsPersonAdd className="icon" size="21"/>회원가입</Link>
                        <Link className="memLinkD" to='/member/signin'><BsPersonCircle className="icon" size="19" />로그인</Link>
                    </>
            }
            </div>
        </div>
    );
}

export default Header;