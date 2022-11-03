import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'js-cookie';
import { useRoutes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import authRouter from './routes';


// const PrivateRoutes = () => {
//   let accessToken = Cookies.get("access_token");
//   return (
//     accessToken != null && accessToken.length ? <Outlet /> : <Navigate to='/login' />
//   )
// }

function App() {
  let accessToken = Cookies.get("access_token");
  const isLoggedIn = accessToken != null && accessToken.length ? true : false;

  const routing = useRoutes(authRouter(isLoggedIn));

  return (
    <>
      {/* {routing}
       */}
       <Home/>
    </>
  );
}

export default App;
