import classes from './CommentList.module.css';

const CommentList = (props) => {
  const {items} = props;
  return (
    <ul className={classes.comments}>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.comment}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;