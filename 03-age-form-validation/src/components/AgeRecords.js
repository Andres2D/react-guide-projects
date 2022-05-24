import styles from './AgeRecords.module.css';

const AgeRecords = props => {
  return(
    <div className={styles.record}>
      <p>{props.user} ({props.age} years old)</p>
    </div>
  )
}

export default AgeRecords;
