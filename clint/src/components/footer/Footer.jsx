import footer from '../../assets/more/28.jpg';
const Footer = () => {
  return (
    <footer
      className=" items-center p-4 opacity-70"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <p className="text-center text-white">
        Copyright Espresso Emporium ! All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
