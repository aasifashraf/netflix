import { getAuth, signOut } from "firebase/auth";
import { Logo } from "./Constants/Links";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "./Constants/StoreSlice";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlesignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="header w-full bg-gradient-to-b from-gray-400 to-transparent flex items-center justify-between">
        <img className="w-[10rem] " src={Logo} alt="" />
        <div className=" flex items-center mr-[1rem]">
          <div className=" w-[2rem] h-[2rem] bg-gray-500 rounded-full"></div>
          <button className=" ml-[1rem] text-black" onClick={handlesignout}>
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
