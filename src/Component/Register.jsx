import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import ani2 from '../Component/RegisterAnamiton.json'
import Lottie from 'lottie-react';

const Register = () => {
  const {createNewUser,setUser,updateUserProfile}=useContext(AuthContex);
  const passwordRegex =/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const navigate=useNavigate();
  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const photo=e.target.photo.value;
    const password=e.target.password.value;



     
    if (!passwordRegex.test(password)) {
      Swal.fire('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
      
      return;
  }

    // console.log(name,email,photo,password);
    createNewUser(email,password)
    .then(result=>{
      // console.log(result.user);

      const user = result.user;
      setUser(user); // Update user context
      updateUserProfile({displayName:name,photoURL:photo})
      .then(result=>{
        navigate("/")
        // console.log(user);
        Swal.fire('succefully regiester')

      })
      .catch(error=>{
       Swal.fire(error.message);
      })

      
    })

  .catch(error=>{
   Swal.fire(error.message)
  })

    


  }




    return (
       <div className='hero-content flex-col lg:flex-row-reverse'>
        {/* ani */}
        <div className=''>
          <Lottie animationData={ani2}></Lottie>

        </div>

        {/* for */}
        <div>
        <div className=" bg-base-200 min-h-screen">
          <ToastContainer></ToastContainer>
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name </span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          
            <p>Already have an Account ? <Link className='text-red-400' to='/login'>Login</Link> </p>
      
          </div>
        </div>
      </div>
        </div>


       </div>
    );
};

export default Register;