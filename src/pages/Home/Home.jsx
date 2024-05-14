import { useLoaderData } from "react-router-dom";
import Carousel from "../../components/Banner/Carousel";
import TopFoods from "../../components/TopFoods/TopFoods";
import Welcome from "../../components/Banner/Welcome";

const Home = () => {
  const foods = useLoaderData();
  //console.log(foods);

  return (
    <div>
      <Carousel></Carousel>
      <Welcome foods={foods}></Welcome>
      <TopFoods foods={foods}></TopFoods>
    </div>
  );
};

export default Home;
