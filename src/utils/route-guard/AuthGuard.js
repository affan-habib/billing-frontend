import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import Cookies from 'js-cookie';

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }) => {
  //const { isLoggedIn } = useAuth();
  const isLoggedIn = Cookies.get("access_token") ? true : false;
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("isLoggedIn---auth", isLoggedIn)
    if (!isLoggedIn) {
      navigate('login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
  
  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
