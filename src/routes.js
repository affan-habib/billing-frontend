import { Navigate, Outlet } from 'react-router-dom';
import Billing from './pages/billing/Billing';
import Home from './pages/Home';
import { Contact } from './views/site/home/Contact';
import LoginPage from './views/site/login/LoginPage';

const authRouter = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <Outlet /> : <Navigate to="/login" />,
    children: [
      { path: 'dashboard', element: <Billing /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/',
    element: isLoggedIn ? <LoginPage /> : <Navigate to="app/dashboard" />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default authRouter;