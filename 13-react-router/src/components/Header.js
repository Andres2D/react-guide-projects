import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            {/* activeClassName={styles.active} --> reac-router-dom --> v5 */}
            <NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? styles.active : ''} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
