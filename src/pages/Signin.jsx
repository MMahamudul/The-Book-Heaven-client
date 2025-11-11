import React from 'react';
import { use } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate} from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router';


const Signin = () => {

    const {logIn, setUser, googleSignIn,} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    

    const handleGoogleLogIn = () =>{
    googleSignIn()
    .then(()=>{
        toast.success('You Google Login Was Successful');
        navigate(`${location.state ? location.state : '/'}`);
     
    })
    .catch((error)=>{
       const errorMessage = error.message;
      toast.error(errorMessage);

    })
  }

    const handleLogIn = (e) =>{
        e.preventDefault();

        const email= e.target.email.value;
        const password= e.target.password.value;

        logIn(email, password).then((res) => {
  
        const user = res.user;
        toast.success('You Have Signed In Successfully');
        setUser(user);
        navigate(`${location.state ? location.state : '/'}`);
        })
        .catch(() => {
        /* const errorCode = err.code; */
        
       /*  const errorMessage = err.message; */
        
        toast.error('Either Username or Password is Wrong! Try With Correct Username and Password')
        });

    }
    return (
       <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-2xl border border-accent/40 p-10">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-accent">Welcome Back</h2>
          <h3 className="text-sm text-gray-500 mt-2">
            Log in to continue your book journey 
          </h3>
        </div>

        
        <form onSubmit= {handleLogIn} className="space-y-5">
        
          <div>
            <label className="block font-medium text-accent mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input w-full input-bordered border-2 border-accent/70 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/40 focus:border-accent transition duration-200"
            />
          </div>

         
          <div>
            <label className="block font-medium text-accent mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input w-full input-bordered border-2 border-accent/70 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-accent/40 focus:border-accent transition duration-200"
            />
          </div>
                  <div>
  <button
  type="button"
  className="link link-hover text-slate-600 text-sm"
>
  Forgot password?
</button>
      </div>

         
          <button
            type="submit"
            className="btn btn-outline btn-accent w-full mt-2 font-semibold text-lg"
          >
            Login
          </button>
        </form>

       
        <div className="divider text-gray-400">OR</div>

       
        <Link onClick={handleGoogleLogIn}
          
          className="btn w-full border border-accent/50 hover:border-accent bg-white hover:bg-accent/10 text-gray-700 font-semibold flex items-center justify-center gap-2 transition duration-200"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </Link>

        
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
           to="/auth/register"
            className="text-accent font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
    );
};
export default Signin;









