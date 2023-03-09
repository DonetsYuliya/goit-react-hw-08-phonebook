import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { contactsState } from 'redux/contacts/contactsSelector';
import css from './style.module.css';

const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsState);

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

  const handleInput = ({ target: { value, name } }) => {
    if (name === 'name') {
      return setName(value);
    }
    setPhone(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (isDublicate(name)) {
      alert(`${name} is already in contacts`);
      setName('');
      return false;
    }
    dispatch(addContact({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={handleInput}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor="phone">Number</label>
        <input
          value={phone}
          onChange={handleInput}
          className={css.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
      <h2 className={css.title}>Contacts</h2>
    </div>
  );
};

export default PhonebookForm;
