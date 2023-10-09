import { FaFacebook } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
const Contact = () => {
  return (
    <div>
      <h1 className="uppercase text-5xl text-center mt-10 mb-4 font-semibold">
        Get it Touch
      </h1>
      <p className="text-center w-1/2 mx-auto mb-4">
        Welcome to our Social Event Management hub, where we turn your dreams
        into unforgettable moments. Whether you are planning a wedding, a
        corporate gathering, a birthday bash, or any special occasion, our
        dedicated team of event experts is here to make your vision a reality.
      </p>
      <div className="flex justify-center items-center gap-6">
        <FaFacebook className="text-5xl text-[#a5935a] cursor-pointer"></FaFacebook>
        <AiFillTwitterCircle className="text-5xl text-[#a5935a] cursor-pointer"></AiFillTwitterCircle>
        <AiFillYoutube className="text-5xl text-[#a5935a] cursor-pointer"></AiFillYoutube>
        <AiFillLinkedin className="text-5xl text-[#a5935a] cursor-pointer"></AiFillLinkedin>
      </div>
      <div className="hero mt-10 bg-base-200">
        <div className="hero-content gap-48 flex-col lg:flex-row-reverse">
          <div className=" py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-10 mx-auto lg:text-left">
            <div className="">
              <AiOutlinePhone className="text-4xl mb-2 h-10 mx-auto text-[#a5935a] cursor-pointer"></AiOutlinePhone>
              <p>+0880172410315</p>
              <p>+0880172414128</p>
            </div>
            <div className="text-center">
              <AiOutlineMail className="text-4xl mb-2 h-10 mx-auto text-[#a5935a] cursor-pointer"></AiOutlineMail>
              <p>event@gmail.com</p>
              <p>social@gmail.com</p>
            </div>
            <div className="">
              <ImLocation className="text-4xl mb-2 h-10 mx-auto text-[#a5935a] cursor-pointer"></ImLocation>
              <p>Baraigram,Natore</p>
              <p>Dhaka,Bangladesh</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#000]">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Company</span>
                </label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="rounded-lg"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
