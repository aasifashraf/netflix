import { formValidation } from "./FormValidation";
import SignUp from "./SignUp";
import { useRef, useState } from "react";

const Signin = () => {
  const [login, setLogin] = useState(true);
  const [errorMassage, seterrorMassage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const handleError = () => {
    const massage = formValidation(email.current.value, password.current.value);
    seterrorMassage(massage);
  };

  const HandleSignup = () => {
    setLogin(!login);
  };

  return login === false ? (
    <SignUp />
  ) : (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <div className=" flex flex-col bg-black opacity-85 p-[3rem] rounded-md w-[25rem] mt-[3rem]">
        <h1 className="w-full text-white font-bold mb-[1.5rem] text-[1.3rem]">
          Sign In
        </h1>
        <input
          ref={email}
          className="  p-2 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white text-[.9rem] "
          type="text"
          placeholder="Enter Email"
        />
        <input
          className=" mt-[1.5rem] p-2 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white text-[.9rem]"
          type="password"
          ref={password}
          placeholder="Enter Password"
        />
        <p className=" text-red-600 font-thin">{errorMassage}</p>
        <button
          className=" bg-[red] p-1 py-3 rounded-sm text-white mt-[2rem] opacity-100 text-[.8rem]"
          onClick={handleError}>
          Sign In
        </button>
        <p className=" text-white flex justify-center mt-[.5rem] text-[.8rem] cursor-pointer">
          Forgot password?
        </p>
        <p className=" text-white mt-[1.5rem] text-[.8rem]">
          New to Netflix?
          <span
            className=" font-bold cursor-pointer hover:underline text-[.8rem]"
            onClick={HandleSignup}>
            Sign up now.
          </span>
        </p>
        <p className=" mt-[1rem] text-white text-[.8rem]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className=" text-blue-700">
            <a href="#">Learn more.</a>
          </span>
        </p>
      </div>
    </form>
  );
};

export default Signin;
