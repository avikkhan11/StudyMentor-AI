import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import Calendar from './pages/Calendar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/subjects',
    element: <Subjects />,
  },
  {
    path: '/subjects/:id',
    element: <SubjectDetail />,
  },
]);

export default router;