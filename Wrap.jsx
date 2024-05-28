import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menubar from "./header/Menubar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Mainpage from "./contents/Mainpage";
import Curscreen from "./contents/Curscreen";
import Genre from "./contents/Genre";
import RecMovie from "./contents/RecMovie";
import MovieInfo from "./detailpage/MovieInfo";
import NotFound from "./contents/NotFound";
import SignUp from "./member/SignUp";
import SignIn from "./member/SignIn";
import Modify from "./member/Modify";

import './css/wrap.css';
import { createDB } from "./utile/creatDB";
import TermsPage from "./footer/TermsPage";
import HomePage from "./footer/Homepage";
import Privacy from "./footer/Privacy";
import FAQPage from "./footer/FAQpage";
import ContactPage from "./footer/ContactPage";



const Wrap = () => {

  const [isLogined, setIsLogined] = useState(false);
  if(localStorage.getItem('movieReviewSvcMemberDB') === null) {
    createDB();
  }
  return (
      <BrowserRouter>
      <Header isLogined={isLogined} setIsLogined={setIsLogined} />
        <div id='wrap'>
          <Menubar/>
          <Routes>
            <Route path='/' element={<Mainpage />}></Route>
            <Route path='/movieInfo/:movieCode' element={<MovieInfo />}></Route>
            <Route path='/recmovie/' element={<RecMovie />}></Route>
            <Route path='/curscreen' element={<Curscreen />}></Route>
            <Route path='/genre' element={<Genre />}></Route>
            <Route path='/member/signup' element={<SignUp />}></Route>
            <Route path='/member/signin' element={<SignIn setIsLogined={setIsLogined} />}></Route>
            <Route path='/member/modify' element={<Modify setIsLogined={setIsLogined} />}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
            
            <Route path='/homepage' element={<HomePage />}> </Route>
            <Route path='/termspage' element={<TermsPage />}> </Route>
            <Route path='/privacy' element={<Privacy />}> </Route>
            <Route path='/supportfaq' element={<FAQPage />}> </Route>
            <Route path='/supportcontact' element={<ContactPage />}> </Route>
          {/* <StillCut /> */}
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

  );
}


export default Wrap;