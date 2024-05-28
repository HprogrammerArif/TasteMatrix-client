import Cover from "../../components/Cover/Cover";
import TopIntro from "../../components/Intro/TopIntro";
import useFoodData from "../../hooks/useFoodData";

const FoodGallery = () => {
  const [foods] = useFoodData();
  console.log(foods);

  return (
    <div>
      <div className="mb-12">
        <Cover
          img="https://i.ibb.co/88r2D5z/photo-1511688878353-3a2f5be94cd7-q-80-w-1374-auto-format-fit-crop-ixlib-rb-4-0.jpg"
          title="FOOD GALLERY"
          subTitle="Would you like to see?"
        ></Cover>

        <TopIntro
        subHeading="Our Top Feedback"
        heading="Provide Your Feedback By Clicking Add Button"
        description="Our Top Foods is your gateway to extraordinary culinary experiences.
      We believe that you deserve nothing but the best, which is why we
      meticulously curate our selection to offer you exceptional flavors"

        ></TopIntro>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-4">
        {foods.map((food) => (
          <div key={food._id}>
            {/* <GalaryCard food={food}></GalaryCard> */}

            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
              <div
                className={`relative w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md`}
                style={{ backgroundImage: `url(${food.food_image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                  <p className="text-lg font-bold">Name: {food.made_by}</p>
                  {/* You can add more content here if needed */}
                  <p className="text-sm"> <b>Feedback: </b> {food.description && food.description.length > 30 ? `${food.description.slice(0, 30)}...` : food.description}</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
