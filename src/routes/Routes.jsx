import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../pages/Error/NotFound";
import Home from "../pages/Home/Home";

// import AddTourSpot from "../pages/AddTourSpot/AddTourSpot";
// import UpdateTourSpot from "../pages/UpdateTourSpot/UpdateTourSpot";
// import Login from "../pages/Login/Login";
// import Register from "../pages/Register/Register";
// import TourDetails from "../pages/TourDetails/TourDetails";
// import PrivateRoute from "./PrivateRoute";
// import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";
// import MyList from "../pages/MyList/MyList";
// import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://discover-wander-server-mohammedarifs-projects.vercel.app/touristSpot"),
      },
      // {
      //   path: "/allTourSpot",
      //   element: <AllTouristSpots></AllTouristSpots>,
      //   loader: () => fetch("https://discover-wander-server-mohammedarifs-projects.vercel.app/touristSpot"),
      // },
      // {
      //   path: "/myList",
      //   element: (
      //     <PrivateRoute>
      //       <MyList></MyList>
      //     </PrivateRoute>
      //   ),
      //   loader: () => fetch("https://discover-wander-server-mohammedarifs-projects.vercel.app/touristSpot"),
      // },
      // {
      //   path: "/tourSpot/:id",
      //   element: (
      //     <PrivateRoute>
      //       <TourDetails></TourDetails>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://discover-wander-server-mohammedarifs-projects.vercel.app/touristSpot/${params.id}`),
      // },
      // {
      //   path: "/contact",
      //   element: <Contact></Contact>,
      // },
      // {
      //   path: "login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "register",
      //   element: <Register></Register>,
      // },
      // {
      //   path: "/addTourSpot",
      //   element: (
      //     <PrivateRoute>
      //       <AddTourSpot></AddTourSpot>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/updateTourSpot/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateTourSpot></UpdateTourSpot>
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://discover-wander-server-mohammedarifs-projects.vercel.app/touristSpot/${params.id}`),
      // },
    ],
  },
]);

export default router;
