import React, { useEffect, useState } from "react";
import {
  ReviewCancelBt,
  ReviewModalStyle,
} from "../../styles/review/ReviewModalstyle";
import { putReview } from "../../api/review/review_api";

const ReviewModal = ({ reviewId, onCloseModal }) => {
  // 데이터 연동(댓글 작성 & 수정)
  const [replyComment, setReplyComment] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const putData = async () => {
      await putReview({ review_id: reviewId, reply: replyComment });
    };
    if (replyComment !== "") {
      putData();
    }
  }, [replyComment]);

  return (
    <ReviewModalStyle>
      <ReviewCancelBt>
        <img src="/images/review/bt_cancel.svg" onClick={onCloseModal} />
      </ReviewCancelBt>
      <p>리뷰</p>
      <textarea
        placeholder="댓글을 남겨주세요."
        onChange={e => {
          const inputText = e.target.value;
          setInputValue(inputText);
        }}
      />
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setReplyComment(inputValue)}>작성완료</button>
      </div>
    </ReviewModalStyle>
  );
};

export default ReviewModal;
