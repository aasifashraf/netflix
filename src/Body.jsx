import { Background, Logo } from "./Constants/Links";
import Footer from "./Constants/footer";
import Signin from "./Form/SignIn";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./Constants/StoreSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/Browse");
        // ...
      } else {
        dispatch(removeUser);
        // User is signed out
        // ...
        navigate("/");
      }
    });
  }, []);
  return (
    <div className=" h-[150%] ">
      <img
        className=" absolute h-[160%] w-[100dvw]"
        src={Background}
        alt="Background"></img>
      <div className=" absolute w-full h-[160%] bg-black opacity-60 "></div>
      <img
        className=" absolute top-0 left-[3rem] w-[10rem] z-[1]  "
        src={Logo}
        alt="Logo"></img>
      <div className=" absolute w-full h-full flex justify-center items-center  ">
        <Signin />
      </div>
      <div className="w-full absolute text-white bottom-[-22.7rem] flex-wrap">
        <Footer />
      </div>
    </div>
  );
};

export default Body;
