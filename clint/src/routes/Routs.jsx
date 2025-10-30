import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Error from '../components/error/Error';
import Home from '../pages/Home';
import AddCoffee from '../components/addcoffee/AddCoffee';
import DeleteCoffee from '../components/deletecoffee/DeleteCoffee';
import CoffeeUpdate from '../components/coffeeUpdate/CoffeeUpdate';
import CoffeeDetals from '../components/coffeeDetals/CoffeeDetals';

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
        path: 'coffeeUpdate/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffes/${params.id}`),
        element: <CoffeeUpdate></CoffeeUpdate>,
      },
      {
        path: 'coffeeDetals/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffes/${params.id}`),
        element: <CoffeeDetals></CoffeeDetals>,
      },
    ],
  },
]);
