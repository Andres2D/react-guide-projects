import { useState, useEffect, useContext } from 'react';
import CommentList from './CommentList';
import NewComment from './NewComment';
import NotificationContext from '../../store/notification-context';
import classes from './Comments.module.css';

const Comments = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if(showComments) {

      notificationCtx.showNotification({
        title: 'Loading comments...',
        message: '',
        status: 'pending'
      });

      fetch(`/api/comments/${eventId}`)
      .then(res => res.json())
      .then(data => {
        setComments(data.comments);
        notificationCtx.hideNotification();
      });
    }
  
  }, [showComments])
  
  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = ({email, name, text}) => {
    // send data to API
    
    notificationCtx.showNotification({
      title: 'Add',
      message: 'Adding comment...',
      status: 'pending'
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify({email, name, comment: text}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      notificationCtx.showNotification({
        title: 'Add',
        message: 'Comment added...',
        status: 'success'
      });
    });
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
