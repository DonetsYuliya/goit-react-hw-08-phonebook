import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64047f9580d9c5c7bac921dc.mockapi.io/contacts',
});

export const getContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const toAddContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const toDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
