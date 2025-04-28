import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';

import Loader from '../components/Loader';


const LoginScreen = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading } ] = useLoginMutation();
	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if(userInfo) {
		navigate('/');
		}
	}, [navigate, userInfo]);


	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			const res = await login({email, password}).unwrap();
			// unwrap the coming promise
			dispatch(setCredentials({...res}));
			toast.success("User Login Successfully");
			localStorage.setItem('token', res.token);
			navigate('/');

		} catch (err) {
			toast.error(err?.data?.message || err.error);
		}
	}


  return (

	<div> 

		<div className='border border-gray-400 p-10 mx-auto max-w-screen-sm rounded-xl text-left '>
			<h1 className='text-4xl font-bold'> Sign In</h1>

			<form onSubmit={ submitHandler }>
				<div className="my-2 mt-5" >
					<label htmlFor="email" className='block'> Email Address</label>
					<input type="email" className='rounded-md w-full p-1 mt-1 outline-1 outline-gray-500 text-gray-800 border border-gray-500 pl-2 bg-white' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				</div>

				<div className="my-2 mt-2" >
					<label htmlFor="password"  className='block'> Password</label>
					<input type="password" autoComplete='password' className='rounded-md w-full p-1 mt-1 outline-1 outline-gray-500 text-gray-800 border border-gray-500 pl-2 bg-white' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>

				{isLoading && <Loader /> }

				<div>
					<button type="submit" className="mt-3 text-white font-semibold rounded-md bg-blue-500 px-4 py-2"> Sign In</button>
				</div>

				<div className='py-3'>
					New Customer? <Link to="/register" className='underline text-blue-500'>Register</Link>
				</div>
			</form>
				
		</div>
	</div>
  )
}

export default LoginScreen;
