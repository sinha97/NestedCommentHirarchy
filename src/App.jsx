import { useState } from "react";
import Comments from "./components/Comments";
import commentsData from "./data/comments";
import {updatedComment} from './utils/helper'
import "./App.css";

function App() {
  const [comments, setComments] = useState(commentsData);

  const addNewReply = (targetId, newComment) => {
    const newUpdatedComments = updatedComment(comments, targetId, newComment);
    setComments(newUpdatedComments)
  };
  return (
    <>
      <Comments commentData={comments} addNewReply={addNewReply} />
    </>
  );
}

export default App;
