import { useState } from "react"


function PostComment() {
  const [comment, setComment] = useState([]);
  
  const handlePostComment = () => {
    const ele = document.getElementById('commentInput');
    const newComment = ele.value;
    ele.value = "";

    setComment(c => [...c, newComment]);
  }

  const handleDeleteComment = (index) => {
    setComment(comment.filter((_,i) => i !== index));
  }

  return (
    <div className="post-comment-wrapper">
      <div className="comments">
        {comment.map((c, i) => 
          <div key={i}>{c} <span onClick={() => handleDeleteComment(i)}>Delete</span></div>
        )}
      </div>
      <input type="text" id="commentInput" />
      <button onClick={handlePostComment}>Add</button>
    </div>
  )
}

export default PostComment