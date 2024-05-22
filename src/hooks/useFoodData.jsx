import axios from "axios";
import { useEffect, useState } from "react";

const useFoodData = () => {

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
      setFoods(data);
    };
    getData();
  }, []);

  return [foods]
};

export default useFoodData;