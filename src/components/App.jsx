import PhonebookForm from 'components/PhonebookForm';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getIsLoading, getError } from 'redux/contacts/contactsSelector';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PhonebookForm />
      <ContactsFilter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactsList />
    </>
  );
};
