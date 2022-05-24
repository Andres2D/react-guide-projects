import Card from '../UI/Card';
import styles from './AgeForm.module.css';

const AgeForm = () => {
  return (
    <Card>
      <form>
        <div className={styles['form-control']}>
          <label className={styles.label}>Username</label>
          <input className={styles.input} type='text' />
        </div>
        <div className={styles['form-control']}>
          <label className={styles.label}>Age (Years)</label>
          <input className={styles.input} type='number' />
        </div>
        <button className='btn'>Add User</button>
      </form>
    </Card>
  )
}

export default AgeForm;
