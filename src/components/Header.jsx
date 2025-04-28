import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logoutCreds } from '../slices/authSlice';
import { useLogoutMutation } from "../slices/userApiSlice";

import { toast } from "react-toastify";

const Header = () => {

	const { userInfo } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const  [logoutApiCall] = useLogoutMutation();

	const logoutHandler = async () => {
		
		try {
			localStorage.removeItem('token'); // Remove the token from localStorage
			window.location.href = '/login'; // Redirect to the login page
			await logoutApiCall().unwrap();
			dispatch(logoutCreds());
			toast.success("User Logout");
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	}

	return (

		<header className="bg-gray-600 w-full">
				<nav className="bg-gray-600 w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3" >
						<Link to="/"> <div className="text-white text-2xl font-semibold"> Mern Auth</div></Link>
						
						<div className=" ">
								{ userInfo ? (
									<>
										{/* Code here to make below as dropdown */}

										<div title={userInfo.name} id="username" className="flex flex-wrap items-center">
											<li className="list-none bg-blue-700 text-white py-1 px-3 rounded-md mr-4">
												{userInfo.name}
											</li>
											<Link to="/profile"> 
												<button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-4"> 
													<span> Profile</span>
												</button> 
											</Link>
											<li onClick={logoutHandler} className="list-none bg-gray-400 py-1 px-3 rounded-md text-white">
												Logout
											</li>
										</div>

									</>
								) : (
									<>
							
										<Link to="/login"> 
											<button className="bg-blue-500 text-white py-1 px-3 rounded-md mr-4">  Sign In </button> 
										</Link>

										<Link to="/register"> 
											<button className="bg-blue-500 text-white py-1 px-3 rounded-md">  Sign Up </button> 
										</Link>
									</>
								) }
						</div>

				</nav>
		</header>
	)
}

export default Header;
