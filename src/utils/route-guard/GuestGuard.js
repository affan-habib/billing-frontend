import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// project import
import config from 'config';
import Cookies from 'js-cookie';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }) => {
  //const { isLoggedIn } = useAuth();
  const isLoggedIn = Cookies.get("access_token") ? true : false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(config.defaultPath, { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default GuestGuard;
