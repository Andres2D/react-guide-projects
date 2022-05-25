import Card from '../UI/Card';
import styles from './AgeRecords.module.css';

const AgeRecords = props => {
  return(
    <Card>
      <ul style={{listStyle: 'none', padding: '0'}}>
        {props.users.map(user => <li key={Math.random()} className={styles.record}>{user.name} ({user.age} years old)</li>)} 
      </ul>
    </Card>
  )
}

export default AgeRecords;
