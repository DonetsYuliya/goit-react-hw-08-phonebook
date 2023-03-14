import css from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authEmail, authToken } from 'redux/auth/authSelector';
import { userLogout } from 'redux/auth/authOperations';

const UserMenu = () => {
  const email = useSelector(authEmail);
  const token = useSelector(authToken);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenuWrapper}>
      <p>{email}</p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(userLogout(token))}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
