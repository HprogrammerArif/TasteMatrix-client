import { Link } from "react-router-dom";

const TopFoodCard = ({ food }) => {

  const { _id, food_category, food_image, food_name, price } = food;

  console.log(food);
  return (
    <div>
      <div className="card card-compact h-[420px] bg-base-100 shadow-xl ">
        <figure>
          <img
            className=" object-cover p-4  w-full animate__animated animate__pulse"
            // src={photo}
            src={food_image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl animate__animated animate__bounce animate__delay-1s">
            {food_name}
          </h2>
          {/* <Fade delay={400} direction="down" triggerOnce>
          <p>{description}</p>
      </Fade> */}
          <div className="flex">
          <h2 className="mb-2 mr-32 text-lg">Food Category:  <b>#{food_category}</b></h2>
          <h2 className="mb-2 text-lg">Price:  <b>{price}</b></h2>
          </div>
          <div className="card-actions">
            <Link to={`/food/${_id}`}>
            <button className="btn bg-violet-500 animate__animated animate__pulse animate__delay-2s text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-green-700 to-violet-800">
              View Details
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
