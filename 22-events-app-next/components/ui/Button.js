import Link from "next/link";
import styles from './Button.module.css';

const Button = props => {

  if(props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }else{
    return (
      <button className={styles.btn}>{props.children}</button>
    );
  }

};

export default Button;
