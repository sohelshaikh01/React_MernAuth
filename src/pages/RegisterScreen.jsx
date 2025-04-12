import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { Form, Button, Row, Col } from 'react-bootstrap';
// import FromContainer from "../components/FormContainer";
import  { toast } from 'react-toastify';

import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';

import Loader from "../components/Loader";


const RegisterScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [register, {isLoading}] = useRegisterMutation();

  useEffect(() => {
    if(userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      toast.error("Password do not match");
    }
    else {
      try {
        if(!name || !email || !password) {
          return toast.error("Fill all required fields");
        }
        const res = await register({name, email, password}).unwrap();
        localStorage.setItem('token', res.data.token);
        dispatch(setCredentials({...res}));
        toast.success("New User Register Successfully");
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }


  return (

    <div> {/* FormContainer */}

      <div className='border border-gray-400 p-10 mx-auto max-w-screen-sm rounded-xl text-left'>

        <h1 className='text-4xl font-bold'> Sign Up</h1>

        <form onSubmit={ submitHandler }>

          <div className="my-2 mt-5" >
            <label htmlFor="name" className='block' id="name"> Name</label>
            <input type="text" className='rounded-md  mt-1 p-1 w-full outline-1 outline-gray-500 text-gray-800 border border-gray-500 pl-2 bg-white' placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="my-2 mt-2" >
            <label htmlFor="email" className='block' id="email"> Email Address</label>
            <input type="email" className='rounded-md mt-1 p-1 w-full outline-1 outline-gray-500 text-gray-800 border border-gray-500 pl-2 bg-white' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="my-2 mt-2" >
            <label htmlFor="password"  className='block'> Password</label>
            <input type="password" autoComplete='password' className='rounded-md mt-1 p-1 w-full outline-1 outline-gray-500 text-gray-800 border border-gray-500 pl-2 bg-white' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="my-2 mt-2" >
            <label htmlFor="confirmPassword"  className='block'> Confirm Password</label>
            <input type="password" autoComplete='password' className='rounded-md mt-1 p-1 w-full outline-1 outline-gray-500 text-gray-800 border border-gray-500 pl-2 bg-white' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>

          {isLoading && <Loader />}

          <div>
            <button type="submit" className="mt-3 text-white font-semibold rounded-md bg-blue-500 px-4 py-2"> Sign Up</button>
          </div>

          <div className='py-3'>
            Already have an account? <Link to="/login" className='underline text-blue-500'>Login</Link>
          </div>

        </form>
      </div>

    </div>
  )
}

export default RegisterScreen;
