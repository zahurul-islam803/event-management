import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleToSignIn = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
 

    // sign in
    signIn(email, password)
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignIn successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/')
    })
    .catch(() =>{
      toast.error("email or password does not match");
    })
    e.target.reset()
  }
  const handleGoogleLogin = () =>{
    googleLogin()
    .then(()=>{
       Swal.fire({
         position: "top-end",
         icon: "success",
         title: "SignIn successfully",
         showConfirmButton: false,
         timer: 1500,
       });
       navigate("/");
    })
    .catch((err)=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
      });
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 px-[40px] pb-8 shadow-2xl bg-base-100">
          <form onSubmit={handleToSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </div>
            <div onClick={handleGoogleLogin} className="flex justify-center items-center gap-2 border rounded-lg">
                <FcGoogle className="text-3xl cursor-pointer"></FcGoogle>
              <button>
                Login with google
              </button>
            </div>
          </form>
          <p>
            New here this website?{" "}
            <Link to={`/register`} className="text-red-600">
              Please Register
            </Link>
          </p>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Login;