import Rec1 from '../../assets/cups/Rectangle 9.png';
import Rec2 from '../../assets/cups/Rectangle 10.png';
import Rec8 from '../../assets/cups/Rectangle 11.png';
import Rec3 from '../../assets/cups/Rectangle 12.png';
import Rec4 from '../../assets/cups/Rectangle 13.png';
import Rec5 from '../../assets/cups/Rectangle 14.png';
import Rec6 from '../../assets/cups/Rectangle 15.png';
import Rec7 from '../../assets/cups/Rectangle 16.png';
const NiceCoffee = () => {
  return (
    <div className="my-20">
      <div className="text-center items-center space-y-2 my-10">
        <p>Follow Us Now</p>
        <h2 className="text-4xl font-bold">Follow on Instagram</h2>

       
      </div>
      <div className="grid grid-cols-4 gap-4 w-10/12 mx-auto ">
        <img src={Rec1} alt="" />
        <img src={Rec2} alt="" />
        <img src={Rec3} alt="" />
        <img src={Rec4} alt="" />
        <img src={Rec5} alt="" />
        <img src={Rec6} alt="" />
        <img src={Rec7} alt="" />
        <img src={Rec8} alt="" />
      </div>
    </div>
  );
};

export default NiceCoffee;
