import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="font-poppins container mx-auto justify-center items-center">
      <Navbar></Navbar>
      <div className="min-h-[450px] ">
      <Outlet></Outlet>
    </div>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
