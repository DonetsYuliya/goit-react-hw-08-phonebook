import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userCurrent } from 'redux/auth/authOperations';
import { authToken } from 'redux/auth/authSelector';

const IsAutorization = ({ children }) => {
  const dispatch = useDispatch();
  const token = useSelector(authToken);

  useEffect(() => {
    dispatch(userCurrent(token));
  }, [dispatch, token]);

  return <>{children}</>;
};

export default IsAutorization;
