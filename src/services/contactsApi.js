import { instance } from './userAuthApi';

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const toAddContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const toDeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
