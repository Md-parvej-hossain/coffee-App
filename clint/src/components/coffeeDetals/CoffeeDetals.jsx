import { Link, useLoaderData } from 'react-router';

const CoffeeDetals = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const { name, price, supplier, taste, category, details, photo } = coffeeData;
  return (
    <div className=" relative">
      <Link
        to="/"
        className="text-sm font-semibold text-blue-600 hover:underline absolute left-80 -top-10"
      >
        ← Back to home
      </Link>
      <div className="flex justify-around items-center bg-[#F5F4F1] p-10 w-6/12 mx-auto my-20">
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold py-2 text-2xl">Niceties</p>
          <p className="font-bold">
            Name: <span className="font-normal">{name}</span>
          </p>
          <p className="font-bold">
            supplier: <span className="font-normal">Galo</span>
          </p>
          <p className="font-bold">
            Price: <span className="font-normal">{price}</span>
          </p>
          <p className="font-bold">
            supplier: <span className="font-normal">{supplier}</span>
          </p>
          <p className="font-bold">
            taste: <span className="font-normal">{taste}</span>
          </p>
          <p className="font-bold">
            category: <span className="font-normal">{category}</span>
          </p>
          <p className="font-bold">
            details: <span className="font-normal">{details}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetals;
