import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate=useNavigate();


  const {userLogin,setUser,handelGooglSignIn}=useContext(AuthContex);

    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        // console.log(email,password);


        userLogin(email,password)
        .then(result=>{

          const user = result.user;
          setUser(user); 

          // console.log(user);
          
          alert('login succeful');
        })
        .catch(error=>{
          alert(error);

        })
    }



    const handleGoogleLogin = () => {
     
      handelGooglSignIn()
        .then(() => {
          navigate('/'); // Redirect to the home page
          toast.success('Google sign-in successful!');
        })
        .catch(error => {
          toast.error(error.message); // Error notification
        });
    };

  



    return (
        <div className=" bg-base-200 min-h-screen">
          <ToastContainer></ToastContainer>
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin} className='btn btn-primary'>Login with Google</button>
      <p>Are you New? <Link className='text-red-400' to='/register'>Regiester</Link> </p>

    </div>
  </div>
</div>
    );
};

export default Login;