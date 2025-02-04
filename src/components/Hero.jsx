import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutCreds } from "../slices/authSlice";
import { toast } from "react-toastify";


const Hero = () => {

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(logoutCreds());
    toast.error("User Logged Out");
  }

  return (
    <div className="md:mx-auto mx-10 max-w-screen-md w-full my-4 border border-gray-400 rounded-xl flex flex-col items-center p-4 md:p-10 bg-slate-50">
        <div> 
          <h1 className="text-3xl font-semibold"> MERN Authentication </h1>
        </div>

        <div> 
          <p className="mt-4">This is a boiler plate for mern authentication that stores a JWT in an HTML</p>
        </div>

        {userInfo && <p className="text-black font-semibold text-xl mt-2 "> You are logged in your account.</p> }

        <div className="mt-4">
          <Link to="/login">
            <button className="text-white font-xl bg-blue-500 px-3 py-1 rounded-md " > Sign In</button>
          </Link>
            
          <Link to="/register" >
            <button onClick={handleClick} className="text-white font-xl bg-gray-500 px-3 py-1 rounded-md ml-4" > Sign Up</button>
          </Link>    
        </div>

    </div>
  )
}

export default Hero;
