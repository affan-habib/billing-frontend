import { Navigate, Outlet } from 'react-router-dom';
import { Contact } from './views/site/home/Contact';
import LangdingPage from './views/site/home/LangdingPage';
import LoginPage from './views/site/login/LoginPage';

const authRouter = (isLoggedIn) => [
  {
    path: '/app',
    element: isLoggedIn ? <Outlet /> : <Navigate to="/login" />,
    children: [
      { path: 'dashboard', element: <LangdingPage /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <LoginPage /> : <Navigate to="app/dashboard" />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default authRouter;