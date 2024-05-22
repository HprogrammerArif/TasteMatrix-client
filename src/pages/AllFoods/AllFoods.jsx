// import JobCard from "../components/JobCard";
import axios from "axios";
import { useEffect, useState } from "react";
import TopFoodCard from "../../components/TopFoods/TopFoodCard";

const AllFoods = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [counts, setCount] = useState();
  const [filter, setFilter] = useState('')
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-foods?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`
      );
      setFoods(data);
    };
    getData();
  }, [itemsPerPage, currentPage, filter]);
  console.log(filter);

  useEffect(() => {
    const getCount = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/foods-count`
        );
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching food count:", error);
      }
    };
    getCount();
  }, []);

  //console.log(counts);
  //console.log(itemsPerPage);

  const numberOfPages = Math.ceil(counts / itemsPerPage);

  const pages = [...Array(numberOfPages || 0).keys()].map(
    (element) => element + 1
  );

  // handle pagination

  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="Fruits">Fruits</option>
              <option value="Sweets and Desserts">Sweets and Desserts</option>
              <option value="Seafood">Seafood</option>
              <option value="Proteins">Proteins</option>
            </select>
          </div>

          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Deadline</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <button className="btn">Reset</button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-12 md:grid-cols-2 lg:grid-cols-3 ">
          {foods.map((food) => (
            <TopFoodCard key={food._id} food={food} />
          ))}
        </div>
      </div>

      {/* pagination section */}
      <div className="flex justify-center mt-12">
        {/* previous button */}

        <button 
        onClick={() => handlePaginationButton(currentPage-1)}
        disabled={currentPage === 1}
         className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {/* number  */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* next button */}
        <button
        onClick={() => handlePaginationButton(currentPage+1)}
        disabled={currentPage === numberOfPages}
         className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AllFoods;
