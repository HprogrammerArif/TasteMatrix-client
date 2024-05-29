import axios from "axios";

const axiosCommon = axios.create({
  baseURL: "https://tastematrix.vercel.app",
});

const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
