import { useState } from 'react';
import { Link } from 'react-router-dom';
// import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit');
  }


  return (

    <div> {/* FormContainer */}

      <div className='border border-gray-400 p-10 mx-auto max-w-screen-sm rounded-md text-left '>

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
