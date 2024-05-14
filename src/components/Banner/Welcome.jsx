import { Link } from "react-router-dom";

const Welcome = ({ foods }) => {
  const {
    food_image,
    food_name,
    description,
    food_category,
    price,
    food_origin,
    made_by,
    _id,
  } = foods;

  return (
    <div className="dark:bg-gray-100 mt-8 px-4 dark:text-gray-900">
      <div className="container grid  grid-cols-12 mx-auto dark:bg-gray-50">
        <div className="bg-no-repeat bg-cover p-3 flex gap-3 dark:bg-gray-300 col-span-full lg:col-span-6">
         <Link className="w-full" to={'/all-food'}>
         <img
            className="rounded-2xl h-[370px] p-4 w-full"
            src={'https://i.ibb.co/qrthVpQ/banner-1.png'}
            alt=""
          />
           </Link>
           <Link className="w-full" to={'/all-food'}>
          <img
            className="rounded-2xl h-[370px] p-4 w-full"
            src={'https://i.ibb.co/02Jgv0C/banner-2.png'}
            alt=""
          />
         </Link>
        </div>
        <div className="flex flex-col pr-8 py-4 col-span-full row-span-full lg:col-span-6">
          <div className="flex justify-center items-center gap-4 mb-3">
            <p>------</p>
            <img
              className="w-12"
              src={`https://i.ibb.co/qWpCPyq/logo-of-wonder.png`}
              alt=""
            />
            <p>------</p>
          </div>
          <h1 className="text-2xl font-black text-center  capitalize lg:text-4xl bg-gradient-to-l from-green-900 to-fuchsia-700 bg-clip-text text-transparent">
            Welcome to Taste Matrix
          </h1>

          <p className=" pt-8 text-center text- text-violet-400 px-8">
            <span className="">
              Our chefs are working 24/7 and are ready to accept visitors and at
              any time of the day and night
            </span>
          </p>
          <p className=" py-8 text-center px-8">
            <span className="">
              We would like to take this opportunity to welcome you at our Pizza
              House. We are offering a warm, friendly atmosphere to share a meal
              with family and friends at any time of the day or evening.
            </span>
          </p>


          

          <div className="flex items-center justify-center pt-2">
            <Link to={`/tourSpot/${_id}`}>
              <button className="btn bg-violet-500 animate__animated animate__pulse animate__delay-2s text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-700 to-violet-800">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
