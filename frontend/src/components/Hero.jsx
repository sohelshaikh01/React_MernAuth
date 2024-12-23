import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-md w-full my-4 border border-gray-400 rounded-md flex flex-col items-center p-10 bg-slate-50">
        <div> 
          <h1 className="text-3xl font-semibold"> MERN Authentication </h1>
        </div>

        <div> 
          <p className="mt-4">This is a boiler plate for mern authentication that stores a JWT in an HTML</p>
        </div>

        <div className="mt-4">
          <Link to="/login">
            <button className="text-white font-xl bg-blue-500 px-3 py-1 rounded-md " > Sign In</button>
          </Link>
            
          <Link to="/register">
            <button className="text-white font-xl bg-gray-500 px-3 py-1 rounded-md ml-4" > Sign Out</button>
          </Link>
            
        </div>
    </div>
  )
}

export default Hero;
