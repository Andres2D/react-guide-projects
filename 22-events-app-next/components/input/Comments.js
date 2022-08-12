import { useState, useEffect } from 'react';
import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './Comments.module.css';

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if(showComments) {
      fetch(`/api/comments/${eventId}`)
      .then(res => res.json())
      .then(data => setComments(data.comments));
    }
  
  }, [showComments])
  

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = ({email, name, text}) => {
    // send data to API
    console.log(email, name, text);
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({email, name, comment: text}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
