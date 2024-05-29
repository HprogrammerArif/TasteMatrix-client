import axios from "axios";
import { useEffect, useState } from "react";

const useAllFood = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-foods`);
      setFoods(data);
    };
    getData();
  }, []);

  return [foods]
};

export default useAllFood;