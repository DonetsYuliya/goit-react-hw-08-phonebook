import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userAuth } from 'redux/auth/authOperations';

import css from './pages-style.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInput = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(userAuth({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={css.title}>Registration Form</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={handleInput}
          className={css.input}
          type="text"
          name="name"
          required
        />

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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
