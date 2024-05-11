import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

  const {user, loading} = useContext(AuthContex);
  const location = useLocation()

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;