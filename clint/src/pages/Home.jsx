import AllCoffee from '../components/allCoffee/AllCoffee';
import Headers from '../components/header/Headers';
import NiceCoffee from '../components/niceCoffee/NiceCoffee';

const Home = () => {
  return (
    <div>
      <Headers></Headers>
      
      <AllCoffee></AllCoffee>
      <NiceCoffee></NiceCoffee>
    </div>
  );
};

export default Home;
