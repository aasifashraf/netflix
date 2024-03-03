import Signin from "./SignIn";
import { useRef, useState } from "react";
import { formValidation } from "./FormValidation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../Constants/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Constants/StoreSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [errorMassage, seterrorMassage] = useState("");

  initializeApp(firebaseConfig);

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
    // console.log(massage);

    if (massage === null) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          //...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMassage("Account is already registered with this email");
          // console.log(errorCode, errorMessage);
          //..
        });
    }
  };
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const { uid, email, displayName } = user;
        // const { photoURL } = auth.user.photoURL;
        // dispatch(
        //   addUser({
        //     uid: uid,
        //     email: email,
        //     displayName: "text",
        //     photoURL: photoURL,
        //   })
        // );
        // ...
      } else {
        // dispatch(removeUser);
        // User is signed out
        // ...
      }
    });
  }, []);

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
      <div className=" flex flex-col bg-black opacity-85 p-[3rem] rounded-md w-[25rem] mt-[3rem]">
        <h1 className=" w-full text-white font-bold mb-[1.5rem] text-[1.3rem]">
          Sign Up
        </h1>
        <input
          className=" p-2 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white text-[.9rem]"
          type="text"
          placeholder="Enter Full Name"
          ref={name}
        />
        <input
          className=" mt-[1.5rem] p-2 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white text-[.9rem]"
          type="text"
          placeholder="Enter Email"
          ref={email}
        />
        <input
          className=" my-[1.5rem] p-2 rounded-sm outline-none opacity-100 bg-black border-[1px] text-white text-[.9rem]"
          type="password"
          placeholder="Enter Password"
          ref={password}
        />
        <p className=" text-red-600 text-[.8rem]">{errorMassage}</p>
        <button
          className=" bg-[red] p-1 text-[.8rem] py-2 rounded-sm text-white mt-[1rem] opacity-100"
          onClick={handleErrors}>
          Sign Up
        </button>
        <p className=" text-white flex justify-center mt-[.5rem] text-[.8rem] cursor-pointer">
          Forgot password?
        </p>
        <p className=" text-white text-[.8rem] mt-[1.5rem]">
          Already a User?
          <span
            className=" font-bold cursor-pointer hover:underline text-[.8rem]"
            onClick={HandleSignIn}>
            Sign in.
          </span>
        </p>
        <p className=" mt-[1rem] text-blue-100 text-[.8rem]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className=" text-blue-300 text-[.8rem] cursor-pointer">
            <a href="#">Learn more.</a>
          </span>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
