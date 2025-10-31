import { BsCupHotFill } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import p1 from '../../assets/more/1.png';
import { Link } from 'react-router';
import { use, useState } from 'react';
import Swal from 'sweetalert2';
const promice = fetch(
  'https://server-afpaqt6g0-habibes-projects-f154a520.vercel.app/coffes'
).then(res => res.json());
const AllCoffee = () => {
  const coffees = use(promice);
  console.log(coffees);
  const [coffData, setCoffeeData] = useState(coffees);
  const handaleDelate = _id => {
    console.log('handale delate');
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        //deleate coffee
        fetch(
          `https://server-afpaqt6g0-habibes-projects-f154a520.vercel.app/coffes/${_id}`,
          {
            method: 'DELETE',
          }
        )
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Coffee has been deleted.',
                icon: 'success',
              });
              //remove the coffee form the state
              const renamingCoffes = coffData.filter(cof => cof._id !== _id);
              setCoffeeData(renamingCoffes);
            }
          });
      }
    });
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${p1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center items-center space-y-2 my-10">
        <p>--- Sip & Savor ---</p>
        <h2 className="text-4xl font-bold">Our Popular Products</h2>

        <Link to={`/addCoffee`} className="btn bg-primary text-white ">
          Add Coffee
          <BsCupHotFill></BsCupHotFill>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-5 my-10 w-10/12  mx-auto">
        {coffData.map(coffee => (
          <div
            key={coffee._id}
            className="flex justify-between items-center bg-[#F5F4F1] px-10 py-5"
          >
            <div>
              <img src={coffee.photo} alt="" />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">
                Name: <span className="font-normal">Hello</span>
              </p>
              <p className="font-bold">
                Chef: <span className="font-normal">Galo</span>
              </p>
              <p className="font-bold">
                Price: <span className="font-normal">{coffee.price}</span>
              </p>
            </div>
            <div className="flex flex-col space-y-5">
              <Link
                to={`/coffeeDetals/${coffee._id}`}
                className="btn bg-primary text-white"
              >
                <FaEye></FaEye>
              </Link>
              <Link
                to={`/coffeeUpdate/${coffee._id}`}
                className="btn bg-[#3C393B] text-white"
              >
                <MdEdit></MdEdit>
              </Link>
              <button
                onClick={() => {
                  handaleDelate(coffee._id);
                }}
                className="btn bg-[#EA4744] text-white"
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
