import React, { useState, useEffect } from "react";
import { getCurrentLoginedSessionID } from '../member/session';
import { VscAccount } from "react-icons/vsc";
import "../css/userReviewList.css"

const UserReviewList = ({ updatedComments, setComments, setShowUserReviewList, currentMovieCode }) => {
  const [userComments, setUserComments] = useState([]);
  const [refreshComments, setRefreshComments] = useState(false); // 새로고침 상태 추가
  const currentUserID = getCurrentLoginedSessionID();

  useEffect(() => {
    if (updatedComments && updatedComments.length > 0) {
      setUserComments(updatedComments);
    } else {
      setUserComments([]); // 빈 배열로 설정
    }
  }, [updatedComments]);

  
  useEffect(() => {
    if (refreshComments) {
      const localComments = JSON.parse(localStorage.getItem("CommentsDB"));
      const updatedLocalComments = localComments[String(currentMovieCode)] || []; // 현재 값을 문자열로 변환하여 사용
      setUserComments(updatedLocalComments);
      setRefreshComments(false);
    }
  }, [refreshComments, currentMovieCode]);

  const removeEventHandler = (commentDate) => {
    const originalData = JSON.parse(localStorage.getItem("CommentsDB")) || {};
    const movieCommentsArray = originalData[String(currentMovieCode)] || []; // 현재 값을 문자열로 변환하여 사용
    
    console.log("[UserReviewList] removeEventHandler: Original CommentsDB", originalData);
    console.log("[UserReviewList] removeEventHandler: Current UserID:", currentUserID);
    console.log("[UserReviewList] removeEventHandler: Current Comment Date:", commentDate);

    // 특정 댓글만 제거하는 방식으로 수정
    const updatedMovieComments = movieCommentsArray.filter(comment => {
      return !(comment.C_Date === commentDate && comment.user_id === currentUserID);
    });

    originalData[String(currentMovieCode)] = updatedMovieComments; // 현재 값을 문자열로 변환하여 사용
    window.localStorage.setItem("CommentsDB", JSON.stringify(originalData));
    setComments(updatedMovieComments);
    setShowUserReviewList(false);
    
    // 댓글 삭제 후 새로고침 상태를 true로 변경
    setRefreshComments(true);
    console.log("[UserReviewList] removeEventHandler: Comment successfully deleted.", updatedMovieComments);
  };


  const sortByDateDescending = (commentsArray) => {
    return commentsArray.sort((a, b) => {
      return new Date(b.C_Date).getTime() - new Date(a.C_Date).getTime();
    });
  };

  const closeModal = () => {
    setShowUserReviewList(false); // 모달 창 닫기
  };
  
  return (
    <div>
      <div className="close_btn_wrap">
      <button className="close-btn" onClick={closeModal}>닫기</button>
      </div>
      {userComments && userComments.length > 0 ? (
        <div>
          <p className="id_wrap"><VscAccount size="23"/> {currentUserID}</p>
          <ul>
            {sortByDateDescending(userComments.filter(comment => comment.user_id === currentUserID)).map((comment, index) => (
              <li className="listbox" key={index}>
                <p><span style={{fontWeight:"bold"}}>{comment.movieTitle}</span>  ⭐ {comment.U_rating}</p>
                <p className="cotents_wrap">{comment.Comments}</p>
                <br />
                <p className="date_wrap"> {comment.C_Date} </p>
                <div className="remove_btn_box">
                <button onClick={() => removeEventHandler(comment.C_Date)}> 삭제 </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div> 댓글이 없습니다. </div>
      )}
    </div>
  );
};

export default UserReviewList;
