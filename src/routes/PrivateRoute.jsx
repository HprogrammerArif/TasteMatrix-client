import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

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