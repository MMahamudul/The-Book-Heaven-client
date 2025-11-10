import React from "react";
import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from './../provider/AuthProvider';
import toast from "react-hot-toast";

const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext);
    const navigate = useNavigate();
   

    const handleRegister = (e)=>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        /* console.log( name, email, password, photo) */

          const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passRegex.test(password)){
        toast.error("Password must be at least 6 characters long,contain at least a lowercase and a uppercase letter ")
        return;

    }
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            toast.success('You Have Registered Successfully');
            updateUser({displayName: name , photoURL: photo})
            .then(()=>{
                setUser({...user, displayName: name , photoURL: photo})
                navigate('/')
            }).catch(() => {
                toast.error('Your Registration Failed');
                setUser(user)
        });     
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode, errorMessage)
        })

    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-2xl border border-accent/40 p-10">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-accent">Create Account</h2>
          <h3 className="text-sm text-gray-500 mt-2">
            Join Book Heaven and explore the world of imagination
          </h3>
        </div>

        
        <form onSubmit={handleRegister} className="space-y-5">
          
          <div>
            <label className="block font-medium text-accent mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your  name"
              className="input w-full input-bordered border-2 border-accent/70 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/40 focus:border-accent transition duration-200"
              required
            />

          </div>

          
          <div>
            <label className="block font-medium text-accent mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input w-full input-bordered border-2 border-accent/70 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/40 focus:border-accent transition duration-200"
              required
            />
          </div>

          
          <div>
            <label className="block font-medium text-accent mb-2">Photo URL</label>
            <input
              type="url"
              name="photo"
              className="input w-full input-bordered border-2 border-accent/70 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/40 focus:border-accent transition duration-200"
              required
            />
          </div>

          
          <div>
            <label className="block font-medium text-accent mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input w-full input-bordered border-2 border-accent/70 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/40 focus:border-accent transition duration-200"
              required
            />
          </div>

          
          <button
            type="submit" 
            className="btn btn-outline btn-accent w-full mt-4 font-semibold text-lg"
          >
            Register
          </button>
        </form>

       
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/auth/signin" className="text-accent font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
