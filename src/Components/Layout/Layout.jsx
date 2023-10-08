import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";

const Layout = () => {
  return (
    <div className="max-w-screen-2xl p-2 mx-auto mt-6">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;