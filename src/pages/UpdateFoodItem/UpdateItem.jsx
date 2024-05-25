import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateItem = () => {
  const foodItem = useLoaderData();
  console.log(foodItem);
  const { user } = useAuth();

  const navigate = useNavigate();

  const {
    food_name,
    food_category,
    price,
    quantity,
    made_by,
    userEmail,
    food_origin,
    food_image,
    description,
    _id,
  } = foodItem || {};

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const food_name = form.foodName.value;
    const food_category = form.foodCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const made_by = form.userName.value;
    const userEmail = form.userEmail.value;
    const food_origin = form.countryName.value;
    const food_image = form.photoURL.value;
    const description = form.description.value;

    const foodData = {
      food_name,
      food_category,
      price,
      quantity,
      made_by,
      userEmail,
      food_origin,
      food_image,
      description,
      addedBy: {
        made_by: user?.displayName,
        userEmail: user?.email,
      },
    };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/foods/${_id}`,
        foodData
      );
      console.log(data);
      toast.success("Job data updated successfully");
      navigate("/my-added-item");
    } catch (error) {
      toast.error(error.message);
      console.log("Hi im error from addJob", error.messgae);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Update Food Items || TasteMatrix</title>
      </Helmet>
      <section className="p-10 bg-gradient-to-l from-green-100 to-violet-200 text-white">
        <form
          onSubmit={handleUpdate}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 w-[70%] mx-auto rounded-md shadow-2xl bg-gray-800">
            <h2 className="text-3xl col-span-4 text-center bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent font-bold">
              <Typewriter words={["Update Food Items"]} loop={true} />
              ..
            </h2>
            <p className="text-center col-span-4 px-4">
              You can update this Food Items if you would like. <br /> Make sure
              you are providing real info.
            </p>

            <div className="grid grid-cols-6 gap-4 col-span-full">
              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  Food Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="foodName"
                  required
                  defaultValue={food_name}
                  placeholder="Enter Food Name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  Food Category
                </label>
                <input
                  id="name"
                  type="text"
                  name="foodCategory"
                  required
                  defaultValue={food_category}
                  placeholder="Enter Food Category"
                  className="w-full rounded-md  text-gray-900 "
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  Price
                </label>
                <input
                  id="cost"
                  type="number"
                  required
                  defaultValue={price}
                  name="price"
                  placeholder="Enter Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  Quantity
                </label>
                <input
                  id="quantity"
                  type="text"
                  required
                  defaultValue={quantity}
                  name="quantity"
                  placeholder="quantity"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="username" className="text-sm">
                  User Name
                </label>
                <input
                  id="userName"
                  type="text"
                  required
                  defaultValue={made_by}
                  disabled
                  name="userName"
                  placeholder="Enter user name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-3 ">
                <label htmlFor="website" className="text-sm">
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  defaultValue={userEmail}
                  disabled
                  required
                  placeholder="Enter User Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <label htmlFor="username" className="text-sm">
                  Country Name
                </label>
                <input
                  id="countryName"
                  type="text"
                  required
                  defaultValue={food_origin}
                  name="countryName"
                  placeholder="Enter country name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700"
                />
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <label htmlFor="website" className="text-sm">
                  Food Image
                </label>
                <input
                  id="photoURL"
                  type="url"
                  name="photoURL"
                  required
                  defaultValue={food_image}
                  placeholder="Enter photo url"
                  className="w-full rounded-md text-gray-900  border-none"
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Short Description
                </label>
                <textarea
                  id="description"
                  placeholder="Description"
                  name="description"
                  required
                  defaultValue={description}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <input
                  id="Add"
                  type="submit"
                  name="button"
                  value="Update"
                  className="w-full cursor-pointer py-2 border mt-4 rounded-md focus:ring focus:ring-opacity-75 btn text-white bg-gradient-to-r from-green-700 to-violet-800 border-gray-700"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateItem;
