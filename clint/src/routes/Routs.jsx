import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Error from '../components/error/Error';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
