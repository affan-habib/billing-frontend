
// auth provider
import Cookies from 'js-cookie';

// ==============================|| AUTH HOOKS ||============================== //

const useAuth = () => {
  //const context = useContext(AuthContext);
  const context = Cookies.get("access_token") ? true : false;

  console.log("context_useAuth", context);
  //if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
