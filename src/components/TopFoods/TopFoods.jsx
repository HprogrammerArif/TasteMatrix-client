import { Link } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";

const TopFoods = ({foods}) => {
  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
        <h3 className="text-center text-gray-800 font-bold capitalize  mb-4  ">Our Top Foods</h3>
        <h1 className="text-2xl font-black text-center  capitalize lg:text-3xl bg-gradient-to-l from-green-600 to-violet-700 bg-clip-text text-transparent">
        You Only Deserve Exceptional.
        </h1>
        <p className="max-w-3xl mx-auto my-6 text-center text-gray-500">
        Our Top Foods is your gateway to extraordinary culinary experiences. We believe that you deserve nothing but the best, which is why we meticulously curate our selection to offer you exceptional flavors
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 px-4">
        {
          foods.map(food => <TopFoodCard key={food._id} food={food}></TopFoodCard>)
        }
        
        </div>
       <div className="text-center mx-auto mt-3">
       <Link to='/all-foods'>
       <button className=" py-3 w-[50%] bg-violet-500 animate__animated animate__pulse animate__delay-2s text-white capitalize transition-colors duration-300 transform bg-gradient-to-l from-red-700 to-yellow-800 mb-16">
              See All Foods
            </button>
       </Link>
       </div>
        {/* <TopFoodCard foods={foods}></TopFoodCard> */}
    </div>
  );
};

export default TopFoods;