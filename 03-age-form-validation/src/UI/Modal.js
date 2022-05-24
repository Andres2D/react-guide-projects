import styles from './Modal.module.css';

const Modal = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h1 className={styles.title}>Invalid input</h1>
        <div className={styles.projection}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Modal;
