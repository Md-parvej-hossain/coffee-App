import { Outlet } from 'react-router';

import Footer from '../components/footer/Footer';
import topimg from '../assets/more/15.jpg';
import logo1 from '../assets/more/logo1.png';
const MainLayout = () => {
  return (
    <div>
      <div
        className="text-center h-120px text-white py-2 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${topimg})` }}
      >
        <div className="flex items-center justify-center space-x-2">
          <img className="w-12" src={logo1} alt="" />
          <h1 className="text-4xl">Espresso Emporium</h1>
        </div>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
