import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Error from '../components/error/Error';
import Home from '../pages/Home';
import AddCoffee from '../components/addcoffee/AddCoffee';
import DeleteCoffee from '../components/deletecoffee/DeleteCoffee';
import UpdateCoffee from '../components/updatecoffee/UpdateCoffee';

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
      {
        path: 'addCoffee',
        Component: AddCoffee,
      },
      {
        path: 'deletCoffee',
        Component: DeleteCoffee,
      },
      {
        path: 'updateCoffee',
        Component: UpdateCoffee,
      },
    ],
  },
]);
