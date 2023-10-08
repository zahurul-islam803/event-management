import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

     if (
       !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)
     ) {
       toast.error(
         "password at least 6 character and mix with capital letter and special character"
       );
       return;
     }

    // registration
    createUser(email, password)
    .then(() =>{
      handleUpdateProfile(name, img).then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
    })
    e.target.reset()
    .catch(err =>{
      toast.error(err.message);
    })
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 px-[40px] pb-8 shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                type="text"
                name="img"
                placeholder="image url"
                className="input input-bordered"
              />
            </div>
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
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text">Accept term & conditions</span>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-secondary">
                Registration
              </button>
            </div>
          </form>
          <p>
            Already have an account?{" "}
            <Link to={`/login`} className="text-amber-600">
              Please login
            </Link>
          </p>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Register;