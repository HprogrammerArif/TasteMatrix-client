import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-[250px] font-bold">404</h1>
      <h2 className="text-5xl font-bold">NOT FOUND</h2>
      <Link to='/'><button className="btn bg-primary text-white font-bold">Home</button></Link>
    </div>
  );
};

export default NotFound;