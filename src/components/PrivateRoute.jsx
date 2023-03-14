import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { authIsLogin, authToken } from 'redux/auth/authSelector';
import { useEffect } from 'react';

const PrivateRoute = () => {
  const isLogin = useSelector(authIsLogin);
  const token = useSelector(authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin && token) {
      return <p>...Loading</p>;
    }

    if (!isLogin && !token) {
      return navigate('/');
    }
  }, [navigate, isLogin, token]);

  return <Outlet />;
};

export default PrivateRoute;
