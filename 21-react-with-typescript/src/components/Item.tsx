import styles from './Item.module.css';

const Item: React.FC<{text: string}> = ({text}) => {
  return (
    <li className={styles.item}>{text}</li>
  )
};

export default Item;
