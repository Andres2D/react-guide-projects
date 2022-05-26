import styles from './Modal.module.css';
import ReactDom from 'react-dom';

const Backdrop = props => {
  return (
    <div className={styles.modal}>
     <div className={styles.modal}>
      <div className={styles.content}>
        <h1 className={styles.title}>Invalid input</h1>
        <div className={styles.projection}>
          {props.children}
        </div>
      </div>
    </div>
  </div>);
};

const Modal = props => {
  return (
   <>
    {ReactDom.createPortal(<Backdrop>{props.children}</Backdrop>, document.getElementById('modal-root'))}
   </>
  )
}

export default Modal;
