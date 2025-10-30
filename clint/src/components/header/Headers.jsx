import banner from '../../assets/more/3.png';
import icon1 from '../../assets/icons/1.png';
import icon2 from '../../assets/icons/2.png';
import icon3 from '../../assets/icons/3.png';
import icon4 from '../../assets/icons/4.png';
const Navbar = () => {
  return (
    <div>
      <div
        className="min-h-[calc(100vh-70px)] w-full bg-cover bg-center object-cover flex flex-col justify-center mx-auto items-end"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" w-6/12  text-white space-y-4 px-8 mx-10 ">
          <h1 className='text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
          <p className='text-xl'>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className='btn border-0 rounded-none bg-primary'>Lern More</button>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-5 justify-between p-10 bg-[#ECEAE3]">
        <div className=" flex flex-col items-start">
          <img src={icon1} alt="" />
          <h4 className="text-2xl">Awesome Aroma</h4>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col items-start ">
          <img src={icon2} alt="" />
          <h4 className="text-2xl">Awesome Aroma</h4>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col items-start ">
          <img src={icon3} alt="" />
          <h4 className="text-2xl">Awesome Aroma</h4>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="flex flex-col items-start ">
          <img src={icon4} alt="" />
          <h4 className="text-2xl">Awesome Aroma</h4>
          <p className="text-lg">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
