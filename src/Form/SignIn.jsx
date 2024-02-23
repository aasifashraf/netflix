import SignUp from "./SignUp";
import { useState } from "react";

const Signin = () => {
  const [login, setLogin] = useState(true);

  const HandleSignup = () => {
    setLogin(!login);
  };

  return login === false ? (
    <SignUp />
  ) : (
    <form action="">
      <div className=" flex flex-col bg-black opacity-85 p-[5rem] rounded-md w-[35rem]">
        <h1 className=" w-full text-white font-bold mb-[2rem] text-[2rem]">
          Sign In
        </h1>
        <input
          className=" p-5 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white "
          type="text"
          placeholder="Enter Email"
        />
        <input
          className=" my-[2rem] p-5 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white"
          type="password"
          placeholder="Enter Password"
        />
        <button className=" bg-[red] p-2 py-4 rounded-sm text-white mt-[2rem] opacity-100">
          Sign In
        </button>
        <p className=" text-white flex justify-center mt-[.5rem]">
          Forgot password?
        </p>
        <p className=" text-white mt-[3rem]">
          New to Netflix?
          <span
            className=" font-bold cursor-pointer hover:underline"
            onClick={HandleSignup}>
            Sign up now.
          </span>
        </p>
        <p className=" mt-[1rem] text-blue-100">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className=" text-blue-700">Learn more.</span>
        </p>
      </div>
    </form>
  );
};

export default Signin;
