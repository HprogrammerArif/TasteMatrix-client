import { Link } from "react-router-dom";

const NewsEventsCard = () => {
  return (
    <div className="flex justify-around">
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img
        src="https://i.ibb.co/fYzXT7b/photo-1555244162-803834f70033-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block mb-3 text-xs font-medium tracking-widest uppercase dark:text-violet-600">
         March 17th 2024
        </span>
        <h2 className="text-xl font-extralight tracking-wide">
        Workshop at Taste Matrix
        </h2>
      </div>
      <Link to={`/all-foods`}>
            <button className=" py-1 px-1 rounded-sm bg-violet-500 animate__animated animate__pulse animate__delay-2s text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-700 to-violet-800">
              Read More
            </button>
          </Link>
    </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img
        src="https://source.unsplash.com/random/300x300/?1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block mb-3 text-xs font-medium tracking-widest uppercase dark:text-violet-600">
         March 17th 2024
        </span>
        <h2 className="text-xl font-extralight tracking-wide">
        Workshop at Taste Matrix
        </h2>
      </div>
      <Link to={`/all-foods`}>
            <button className=" py-1 px-1 rounded-sm bg-violet-500 animate__animated animate__pulse animate__delay-2s text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-700 to-violet-800">
              Read More
            </button>
          </Link>
    </div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img
        src="https://i.ibb.co/fYzXT7b/photo-1555244162-803834f70033-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block mb-3 text-xs font-medium tracking-widest uppercase dark:text-violet-600">
         March 17th 2024
        </span>
        <h2 className="text-xl font-extralight tracking-wide">
        Workshop at Taste Matrix
        </h2>
      </div>
      <Link to={`/all-foods`}>
            <button className=" py-1 px-1 rounded-sm bg-violet-500 animate__animated animate__pulse animate__delay-2s text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-700 to-violet-800">
              Read More
            </button>
          </Link>
    </div>
    </div>
  );
};

export default NewsEventsCard;
