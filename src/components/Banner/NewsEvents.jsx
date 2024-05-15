import { Link } from "react-router-dom";
import NewsEventsCard from "./NewsEventsCard";

const NewsEvents = () => {
  return (
    <div className="bg-gray-100 mb-20 pb-12">
      <div className="flex flex-col pr-8 py-4 col-span-full row-span-full lg:col-span-6">
        <div className="flex mt-12 justify-center items-center gap-4 mb-6">
          <p>------</p>
          <img
            className="w-12 "
            src={`https://i.ibb.co/qWpCPyq/logo-of-wonder.png`}
            alt=""
          />
          <p>------</p>
        </div>
        <h1 className="text-2xl text-center  capitalize lg:text-4xl bg-gradient-to-l from-green-900 to-fuchsia-700 bg-clip-text text-transparent">
        Upcoming <br /> News & Events
        </h1>

        <p className=" py-8 mb-2 text-center text- px-8">
          <span className="">
          Stay tuned for the latest gastronomic buzz! Discover upcoming culinary delights, events, <br /> and trends to whet your appetite on our food website
          </span>
        </p>
        
        <NewsEventsCard></NewsEventsCard>

        
      </div>
    </div>
  );
};

export default NewsEvents;
