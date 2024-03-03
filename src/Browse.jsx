import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Logo } from "./Constants/Links";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Constants/StoreSlice";
import { useEffect } from "react";
import useMovieslist from "./Hooks/useMovieslist";
import TopSectionBrowse from "./TopSectionBrowse";

const Browse = () => {
  // const profileName = useSelector((store) => store);
  // console.log(profileName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useMovieslist();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        // console.log(displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );

        navigate("/Browse");
        // console.log(profileName);

        // ...
      } else {
        dispatch(removeUser);
        // User is signed out
        // ...
        navigate("/");
      }
    });
  }, []);

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
          {/* <p>{}</p> */}
          <div className=" w-[2rem] h-[2rem] bg-gray-500 rounded-full"></div>
          <button className=" ml-[1rem] text-black" onClick={handlesignout}>
            Sign Out
          </button>
        </div>
      </div>
      <TopSectionBrowse />
    </div>
  );
};

export default Browse;
