import styles from "./styles.module.css";

const CommentItem = ({ comment }) => {
  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentDetail}>

      <div>{comment?.comment}</div>
      <div className={styles.controls}>
        <span>View reply</span>
        <span>Add reply</span>
      </div>
      </div>
      {comment.replies.length > 0 && <Comments commentData={comment.replies} />}
    </div>
  );
};

const Comments = ({ commentData }) => {
  return (
    <>
      {commentData?.map((comment) => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </>
  );
};

export default Comments;
