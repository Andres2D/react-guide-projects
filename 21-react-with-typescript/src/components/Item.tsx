import styles from './Item.module.css';

const Item: React.FC<{id: string, text: string, onClickItem: (id: string) => void}> = ({id, text, onClickItem }) => {

  const clickHandler = (): void => {
    onClickItem(id); 
  }

  return (
    <li className={styles.item} onClick={clickHandler}>{text}</li>
  )
};

export default Item;
