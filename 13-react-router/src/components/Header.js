import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            {/* activeClassName={styles.active} */}
            <NavLink  to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
