import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Logo } from "./Constants/Links";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./Constants/StoreSlice";
import { useEffect } from "react";
import useMovieslist from "./Hooks/useMovieslist";
import TopSectionBrowse from "./TopSectionBrowse";
import SecondSection from "./SecondSection";
import useTopRated from "./Hooks/useTopRated";
import useUpComing from "./Hooks/useUpcoming";
import useRandomNumber from "./Hooks/useRandomNumber";
import usePopularMovies from "./Hooks/usePopularMovies";
// import { useSelector } from "react-redux";

const Browse = () => {
  // const profileName = useSelector((store) => store.movies);
  // console.log(profileName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useMovieslist();
  usePopularMovies();
  useTopRated();
  useUpComing();

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
    <div className=" w-screen bg-black">
      <div className="header w-screen flex items-center justify-between absolute z-20 bg-gradient-to-b from-black">
        <img className="w-[10rem] " src={Logo} alt="" />
        <div className=" flex items-center mr-[1.5rem]">
          {/* <p>{}</p> */}
          <div className=" w-[2rem] h-[2rem] bg-white bg-opacity-50 rounded-full"></div>
          <button className=" ml-[1rem] text-white" onClick={handlesignout}>
            Sign Out
          </button>
        </div>
      </div>
      <div className=" aspect-video relative mb-0 z-10">
        <TopSectionBrowse />
      </div>
      <div className="relative aspect-video">
        <div className="relative -top-40 z-20 ">
          <SecondSection />
        </div>
      </div>
    </div>
  );
};

export default Browse;
