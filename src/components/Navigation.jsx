import { Link } from 'react-router-dom';
import css from './style.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className={css.navList}>
          <li>
            <Link className={css.navLink} to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className={css.navLink} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className={css.navLink} to="/contacts">
              Contacts Book
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
