import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

import '../css/totalreviewlist.css';

const TotalReviewList = ({ comments }) => {
  const [currentMovieCode, setCurrentMovieCode] = useState(null);
  const [totalComments, setTotalComments] = useState(0);
  const [sortcomments, setSortComments] = useState([]);

  const { movieCode } = useParams();

  useEffect(() => {
    const codeAsNumber = parseInt(movieCode);
    setCurrentMovieCode(isNaN(codeAsNumber) ? null : codeAsNumber);
  }, [movieCode]);
  
  useEffect(() => {
    if (currentMovieCode !== null && Array.isArray(comments[currentMovieCode])) {
      console.log('comments', comments[currentMovieCode]);
      const currentComments = [...comments[currentMovieCode]];
      const movieComment = currentComments.reverse();
      setSortComments(movieComment);
      console.log('현재리뷰',movieComment);
      setTotalComments(comments[currentMovieCode].length);

  
    }
  }, [currentMovieCode, comments]);


  const handleSortChange = (event) => {
    const commentType = event.target.value;
    let sortedComments = [];

    switch (commentType) {
      case 'recent':
        sortedComments = [...sortcomments].sort((a, b) => new Date(b.C_Date) - new Date(a.C_Date));
        break;

      case 'old':
        sortedComments = [...sortcomments].sort((a, b) => new Date(a.C_Date) - new Date(b.C_Date));
        break;

      case 'highestRating':
        sortedComments = [...sortcomments].sort((a, b) => b.U_rating - a.U_rating);
        break;

      case 'lowestRating':
        sortedComments = [...sortcomments].sort((a, b) => a.U_rating - b.U_rating);
        break;

      default:
        sortedComments = [...sortcomments];
        break;
    }

    setSortComments(sortedComments);
  };

  return (
<div className="review_container">
      <div className="selectbox">
        <select className="select" onChange={handleSortChange}>
          <option value="recent">최신순</option>
          <option value="old">오래된순</option>
          <option value="highestRating" >별점높은순</option>
          <option value="lowestRating">별점낮은순</option>
        </select>
      </div>
      <p className="comment_length">총 코멘트 수: {totalComments}</p>
      {sortcomments.map((comment, index) => (
        <div key={index} className="commentsBox">
          <p className="id"> <VscAccount size="23"/> {comment.user_id} ⭐ {comment.U_rating}</p>
          <p className="comment">{comment.Comments} </p>
          <p className="date">{comment.C_Date} </p>
        </div>
      ))}
    </div>
  );
};

export default TotalReviewList;
