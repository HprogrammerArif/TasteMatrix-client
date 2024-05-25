import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import NotFound from "../pages/Error/NotFound";
import Home from "../pages/Home/Home";
import Login from '../components/Login/Login'
import Register from "../components/Register/Register";
import FoodDetails from "../pages/SinglePage/FoodDetails";
import PrivateRoute from "./PrivateRoute";
import AllFoods from "../pages/AllFoods/AllFoods";
import AddFood from "../pages/AddFood/AddFood";

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
        //loader: () => fetch(`${import.meta.env.VITE_API_URL}/foods`),
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
      {
        path: "/food/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
      },
      {
        path: "/all-foods",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/add-food-item",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
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
