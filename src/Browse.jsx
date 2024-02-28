import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Logo } from "./Constants/Links";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Constants/StoreSlice";
import { useEffect } from "react";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email } = user;
        const { displayName, photoURL } = auth;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

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

  // const name = useSelector((state) => state.user.displayName);
  // console.log(name);
  const handlesignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
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
          {/* <p>{name}</p> */}
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
