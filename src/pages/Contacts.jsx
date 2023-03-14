import PhonebookForm from 'components/PhonebookForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getIsLoading, getError } from 'redux/contacts/contactsSelector';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Outlet />
      <PhonebookForm />
      <ContactsFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </div>
  );
};
export default Contacts;
