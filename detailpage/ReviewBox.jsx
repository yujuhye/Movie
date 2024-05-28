import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { VscAccount } from "react-icons/vsc";

import movieData from '../contents/movieDB.json';
import { getDateTime } from '../utile/membersUtiles.js';
import { getCurrentLoginedSessionID } from '../member/session';

import TotalReviewList from "./TotalReviewList";
import UserReviewList from "./UserReviewList";

import '../css/reviewBox.css';

const ReviewBox = () => {
  const [u_ratingValue, setURatingValue] = useState(5);
  const [showUserReviewList, setShowUserReviewList] = useState(false);
  const [currentUserID, setCurrentUserID] = useState('');
  const [currentMovieCode, setCurrentMovieCode] = useState(null);
  const [comments, setComments] = useState({});
  const [totalComments, setTotalComments] = useState(0);
  const { movieCode } = useParams();

  useEffect(() => {
    const comments_id = getCurrentLoginedSessionID();
    setCurrentUserID(comments_id);
    setCurrentMovieCode(movieCode);
    const reviewdata = JSON.parse(localStorage.getItem("CommentsDB")) || {};
    setComments(reviewdata);
  }, [movieCode, showUserReviewList]); // 여기에 showUserReviewList 추가

  useEffect(() => {
    const movieComments = comments[currentMovieCode] || [];
    setTotalComments(movieComments.length);
  }, [currentMovieCode, comments, showUserReviewList]); // 여기에 showUserReviewList 추가

  const handleCloseModal = () => {
    // 모달이 닫힐 때 로컬 스토리지에서 다시 코멘트 데이터 가져오기
    const reviewdata = JSON.parse(localStorage.getItem("CommentsDB")) || {};
    setComments(reviewdata);

    setShowUserReviewList(false);
  };


  const reviewSubmitHandler = (event) => {
    event.preventDefault();
    const inputData = document.getElementById("inputComment").value;
    if(getCurrentLoginedSessionID() === '') {
      alert('로그인 해주세요')
    } else{
      if (inputData === "") {
        alert("댓글을 작성해 주세요.");
      } else {
        const createdDate = getDateTime();
        const selectedRating = u_ratingValue; 
        const updatedComments = { ...comments };
  
        const movieCodeAsString = currentMovieCode.toString().padStart(4, '0');
        const movieTitle = movieData[movieCodeAsString] ? movieData[movieCodeAsString].title : "Title not found";
        
        const newComment = {
          user_id: currentUserID,
          Comments: inputData,
          C_Date: createdDate,
          U_rating: selectedRating,
          movieTitle: movieTitle,
        };
  
        const movieComments = updatedComments[currentMovieCode] || [];
        movieComments.push(newComment);
        updatedComments[currentMovieCode] = movieComments;
  
        localStorage.setItem("CommentsDB", JSON.stringify(updatedComments));
        setComments(updatedComments);
        setTotalComments(prevTotalComments => prevTotalComments + 1);
        alert("저장되었습니다")
        console.log("저장되었습니다.", updatedComments);
        setShowUserReviewList(false);
      }
    }
  };

  return (
    <div className="review-box-container">
      <div className="review_box">
      {showUserReviewList && (
        <div className="modal-background">
          <div className="modal-content">
            {/* UserReviewList 컴포넌트 */}
            <UserReviewList 
              updatedComments={comments[currentMovieCode]}
              currentMovieCode={currentMovieCode}
              currentUserID={currentUserID}
              setShowUserReviewList={setShowUserReviewList}
              setComments={setComments}
            />
          </div>
        </div>
      )}
      <form className="inputWrap" onSubmit={reviewSubmitHandler}>
        <div className="id_Rating_Wrap">
          <p className="user_ID"><VscAccount className="vsc" size="23"/>{currentUserID} </p>
        </div>
            <Rating ratingValue={u_ratingValue} onChangeRating={setURatingValue} />
        <textarea id="inputComment" placeholder="코멘트를 입력해주세요." cols={100} rows={5} maxLength="300"></textarea>
        <div className="submitBtn_wrwap">
        <button className="submitBtn" type="submit"> 작성 </button>
        </div>
      </form>
          <button className="mycomment_btn" onClick={() => setShowUserReviewList(!showUserReviewList)}> 내 코멘트 보기 </button>
      </div>
      <div className="review_list_wrap">
      <TotalReviewList
        comments={comments}
        totalComments={totalComments}
        setTotalComments={setTotalComments}
        currentMovieCode={currentMovieCode}
      />
      </div>
    </div>
  );
};

const Rating = ({ ratingValue, onChangeRating }) => {
  return (
    <div className="rating">
      <Rate
        defaultValue={5}
        allowHalf
        allowClear={true}
        value={ratingValue}
        onChange={onChangeRating}
      />
      <div className="ratingValue"> {ratingValue} </div>
    </div>
  );
}

export default ReviewBox;
