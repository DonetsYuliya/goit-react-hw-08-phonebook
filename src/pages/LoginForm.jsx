import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/auth/authOperations';

import css from './pages-style.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = ({ target: { value, name } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return name;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(userLogin({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={css.title}>Login Form</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleInput}
          className={css.input}
          type="email"
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handleInput}
          className={css.input}
          type="password"
          name="password"
          required
        />

        <button className={css.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
