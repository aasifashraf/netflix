import { Background, Logo } from "./Constants/Links";
import Footer from "./Constants/footer";
import Signin from "./Form/SignIn";

const Body = () => {
  return (
    <div className=" h-[150%]">
      <img
        className=" absolute h-[160%]"
        src={Background}
        alt="Background"></img>
      <div className=" absolute w-full h-[160%] bg-black opacity-60 "></div>
      <img
        className=" absolute top-0 left-[10rem] w-[15rem] z-[1]  "
        src={Logo}
        alt="Logo"></img>
      <div className=" absolute w-full h-full flex justify-center items-center  ">
        <Signin />
      </div>
      <div className=" absolute text-white bottom-[-28.5rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
