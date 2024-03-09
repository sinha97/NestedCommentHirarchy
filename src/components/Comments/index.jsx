import { useState } from "react";
import styles from "./styles.module.css";

const CommentItem = ({ comment, addNewReply }) => {
  const [showReply, toggleReply] = useState(false);
  const [showAddReply, toggleAddReply] = useState(false);

  const handleBlur = () => {
    const newComment = e.target.value;
    addNewReply(comment.id, newComment);
    toggleAddReply(false);
    toggleReply(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      const newComment = e.target.value;
      addNewReply(comment.id, newComment);
      toggleAddReply(false);
      toggleReply(true);
    }
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentDetail}>
        <div>{comment?.comment}</div>
        <div className={styles.controls}>
          {comment.replies.length > 0 && (
            <span onClick={() => toggleReply(!showReply)}>View reply</span>
          )}

          <span onClick={() => toggleAddReply(!showAddReply)}>Add reply</span>
        </div>
      </div>
      {showReply && (
        <Comments commentData={comment.replies} addNewReply={addNewReply} />
      )}
      {showAddReply && (
        <input
          className={styles.replyBox}
          type="text"
          autoFocus
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder="enter your reply!"
        />
      )}
    </div>
  );
};

const Comments = ({ commentData, addNewReply }) => {
  return (
    <>
      {commentData?.map((comment) => (
        <CommentItem
          comment={comment}
          key={comment.id}
          addNewReply={addNewReply}
        />
      ))}
    </>
  );
};

export default Comments;
