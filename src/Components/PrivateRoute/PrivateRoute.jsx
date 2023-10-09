import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const {user, loading} = useContext(AuthContext);
  if(loading){
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>;
      </div>
    );
  }
  if(user){
    return children
  }
  return <Navigate to={`/login`}></Navigate>
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
