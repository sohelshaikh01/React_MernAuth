import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { Form, Button, Row, Col } from 'react-bootstrap';
// import FromContainer from "../components/FormContainer";
import  { toast } from 'react-toastify';

import Loader from "../components/Loader";
// import FormContainer from '../components/FormContainer';

import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';


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
            <input type="text" className='rounded-md outline-gray-500 w-full p-1 mt-1 outline outline-1' placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="my-2 mt-2" >
            <label htmlFor="email" className='block' id="email"> Email Address</label>
            <input type="email" className='rounded-md outline-gray-500 w-full p-1 mt-1 outline outline-1' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="my-2 mt-2" >
            <label htmlFor="password"  className='block'> Password</label>
            <input type="password" autoComplete='password' className='rounded-md outline-gray-500 w-full p-1 mt-1 outline outline-1' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="my-2 mt-2" >
            <label htmlFor="confirmPassword"  className='block'> Confirm Password</label>
            <input type="password" autoComplete='password' className='rounded-md outline-gray-500 w-full p-1 mt-1 outline outline-1' placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
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
