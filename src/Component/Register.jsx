import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from './AuthProvider';

const Register = () => {
  const {createNewUser,setUser}=useContext(AuthContex);

  const handleRegister=(e)=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const photo=e.target.photo.value;
    const password=e.target.password.value;

    // console.log(name,email,photo,password);
    createNewUser(email,password)
    .then(result=>{
      // console.log(result.user);

      const user = result.user;
      setUser(user); // Update user context

      
    })

  .catch(error=>{
    console.log("ERROR",error);
  })

    


  }




    return (
        <div className=" bg-base-200 min-h-screen">
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
    );
};

export default Register;