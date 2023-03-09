import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { contactsState } from 'redux/contacts/contactsSelector';
import { filterState } from 'redux/filters/filterSelector';
import css from './style.module.css';

const ContactsList = () => {
  const contacts = useSelector(contactsState);
  const filter = useSelector(filterState);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const isFilteredContacts = getFilteredContacts();

  const item = isFilteredContacts.map(({ id, name, phone }) => {
    return (
      <li className={css.item} key={id}>
        {name}: {phone}{' '}
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{item}</ul>;
};

export default ContactsList;
