import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContex } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContex);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // Show success toast
        //toast.success("Login Successful");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        //redirect to home page or redirect page
        // or navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error(error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // googleLogin
  const handleGoogleLogin = () => {
       googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // Show success toast
        //toast.success("Login Successful");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        //redirect to home page or redirect page
        // or navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((errors) => {
        //const errMsg = errors.message;
        //console.log(errMsg);
        //toast.error(errMsg.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${errors.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  // Github Login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);

        // Show success toast
        toast.success("Login Successful");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        // //redirect to home page or redirect page
        //   // or navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((errors) => {
        //const errMsg = errors.message;
        //console.log(errMsg);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${errors.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>TasteMatrix || Login</title>
      </Helmet>
      <h2 className="text-3xl mt-3 text-center">Please login</h2>

      <div className="hero">
        <div className="hero-content md:w-3/4 lg:w-full">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute bottom-4 right-5 text-xl"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                <div className="flex gap-4">
                  <Link
                    className="font-bold text-violet-600 underline"
                    onClick={handleGoogleLogin}
                  >
                    Google
                  </Link>

                  <Link
                    className="font-bold text-green-600 underline"
                    onClick={handleGithubLogin}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-green-400 bg-violet-500">
                  Login
                </button>
              </div>
              <div className="text-center">
                <small>
                  Do not have an account? please{" "}
                  <Link
                    className="font-bold text-blue-600 underline"
                    to="/register"
                  >
                    Register
                  </Link>{" "}
                </small>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          className="w-[80%] z-30 max-w-[400px] text-3xl"
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Login;
