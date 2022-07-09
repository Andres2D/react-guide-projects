import styles from './Item.module.css';

const Item: React.FC<{text: string, onClickItem: () => void}> = ({text, onClickItem }) => {

  return (
    <li className={styles.item} onClick={onClickItem}>{text}</li>
  )
};

export default Item;
