import Signin from "./SignIn";
import { useRef, useState } from "react";
import { formValidation } from "./FormValidation";

const SignUp = () => {
  const [login, setLogin] = useState(true);
  const [errorMassage, seterrorMassage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleErrors = () => {
    const massage = formValidation(
      email.current.value,
      password.current.value,
      name.current.value
    );
    seterrorMassage(massage);
    console.log(massage);
  };

  const HandleSignIn = () => {
    setLogin(!login);
  };

  return login === false ? (
    <Signin />
  ) : (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <div className=" flex flex-col bg-black opacity-85 p-[5rem] rounded-md w-[35rem] mt-[6.2rem]">
        <h1 className=" w-full text-white font-bold mb-[2rem] text-[2rem]">
          Sign Up
        </h1>
        <input
          className=" p-5 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white "
          type="text"
          placeholder="Enter Full Name"
          ref={name}
        />
        <input
          className=" mt-[2rem] p-5 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white "
          type="text"
          placeholder="Enter Email"
          ref={email}
        />
        <input
          className=" my-[2rem] p-5 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white"
          type="password"
          placeholder="Enter Password"
          ref={password}
        />
        <p className=" text-red-500 font-thin">{errorMassage}</p>
        <button
          className=" bg-[red] p-2 py-4 rounded-sm text-white mt-[2rem] opacity-100"
          onClick={handleErrors}>
          Sign Up
        </button>
        <p className=" text-white flex justify-center mt-[.5rem]">
          Forgot password?
        </p>
        <p className=" text-white mt-[3rem]">
          Already a User?
          <span
            className=" font-bold cursor-pointer hover:underline"
            onClick={HandleSignIn}>
            Sign in.
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

export default SignUp;
