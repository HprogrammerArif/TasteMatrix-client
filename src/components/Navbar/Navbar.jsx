import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// import 'react-tooltip/dist/react-tooltip.css'
import { AuthContex } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex);
  const [theme, setTheme] = useState("light");
  const {loading} = useContext(AuthContex)


  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errors = error.message;
        console.log(errors);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allTourSpot">All TourSpot</NavLink>
      </li>
      <li>
        <NavLink to="/addTourSpot">Add TourSpot</NavLink>
      </li>
      {/* <li>
        <NavLink to="/updateTourSpot">Update TourSpot</NavLink>
      </li> */}
      {user && (
        <li>
          <NavLink to="/myList">My List</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-12 mr-2"
              src="https://i.ibb.co/qWpCPyq/logo-of-wonder.png"
              alt=""
            />
            <span className="font-black text-xl bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent mt-1">
            Taste<br />
            Matrix
            </span>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div>
        {user ? (
          <>
            <button
              className="px-3 py-2 rounded-lg bg-purple-500 text-gray-100 font-semibold mr-4"
              onClick={handleLogOut}
            >
              <a>Logout</a>
            </button>

            <button
            
              className="dropdown rounded-2xl dropdown-end tooltip-left tooltip "
              data-tip={user.displayName}
              //data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}
            >
              
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost  btn-circle avatar"
              >
                <div className="w-15 border-4 border-green-600 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/userProfile" className="justify-between">
                    View Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </button>
          </>
        ) : (
          <>
            <Link className="mr-3" to="/register">
              <button className="self-center px-2.5 py-2 font-semibold rounded bg-green-400 text-gray-900">
                Register
              </button>
            </Link>

            {/* bg-gradient-to-r from-green-400 to-blue-500 */}
            <Link to="/login">
              <button className="self-center px-3 py-2 font-semibold rounded bg-violet-400 text-gray-900">
                Login
              </button>
            </Link>
          </>
        )}

        <label className="swap swap-rotate ml-1">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
