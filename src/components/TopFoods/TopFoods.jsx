import { Link } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";

import useFoodData from "../../hooks/useFoodData";
import TopIntro from "../Intro/TopIntro";

const TopFoods = () => {
  const [foods] = useFoodData();

  // const [foods, setFoods] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
  //     setFoods(data);
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <TopIntro
        subHeading="Our Top Foods"
        heading="You Only Deserve Exceptional."
        description="Our Top Foods is your gateway to extraordinary culinary experiences.
      We believe that you deserve nothing but the best, which is why we
      meticulously curate our selection to offer you exceptional flavors"
      ></TopIntro>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 px-4">
        {foods.slice(0, 6).map((food) => (
          <TopFoodCard key={food._id} food={food}></TopFoodCard>
        ))}
      </div>
      <div className="text-center mx-auto mt-3">
        <Link to="/all-foods">
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
