import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { authIsLogin, authToken } from 'redux/auth/authSelector';
import { useEffect } from 'react';

const PublicRoute = () => {
  const isLogin = useSelector(authIsLogin);
  const token = useSelector(authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin && token) {
      return <p>...Loading</p>;
    }

    if (isLogin && token) {
      return navigate('/contacts');
    }
  }, [navigate, isLogin, token]);

  return <Outlet />;
};

export default PublicRoute;
