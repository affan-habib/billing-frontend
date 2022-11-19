import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'js-cookie';
import { useRoutes } from "react-router-dom";
import './App.css';
import authRouter from './routes';


// const PrivateRoutes = () => {
//   let token = Cookies.get("token");
//   return (
//     token != null && token.length ? <Outlet /> : <Navigate to='/login' />
//   )
// }

function App() {
  let token = Cookies.get("token");
  const isLoggedIn = token != null && token.length ? true : false;

  const routing = useRoutes(authRouter(isLoggedIn));

  return (
    <>
      {routing}
    </>
  );
}

export default App;
