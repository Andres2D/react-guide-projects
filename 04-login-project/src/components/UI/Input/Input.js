import classes from './Input.module.css';

const Input = props => {
  return(
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.idInout}>{props.label}</label>
      <input
        type={props.type}
        id={props.idInout}
        value={props.value}
        onChange={props.onInputChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
