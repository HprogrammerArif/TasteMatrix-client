import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  const handleAddFood = (e) => {
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

   

    //send data to backend or server

    if (user && user.email) {
      //send cart item to the database

      const newFoodItem = {
        food_name,
        food_category,
        price,
        quantity,
        addedBy: {
          made_by,
          userEmail,
        },
        made_by,
        userEmail,
        food_origin,
        food_image,
        description,
      };
      console.log(newFoodItem);


      axiosSecure.post("/foods", newFoodItem).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `added food item sucessfully`,
            showConfirmButton: false,
            timer: 1500
          });
          // refatch the cart to update the cart items
          //refetch()
          form.reset();
        }
      });

    } 
    
    // else {
    //   Swal.fire({
    //     title: "You are not logged in",
    //     text: "Please login to add to the cart?",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, Log In",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       //send the user to  login page

    //       //navigate("/login", { state: { from: location } });
    //     }
    //   });
    // }


  };


  return (
    <div>
      <Helmet>
        <title>Add Food Items || TasteMatrix</title>
      </Helmet>
      <section className="p-10 bg-gradient-to-l from-green-100 to-violet-200 text-white">
        <form
          onSubmit={handleAddFood}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 w-[70%] mx-auto rounded-md shadow-2xl bg-gray-800">
            <h2 className="text-3xl col-span-4 text-center bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent font-bold">
              <Typewriter words={["Add Food Items"]} loop={true} />
              ..
            </h2>
            <p className="text-center col-span-4 px-4">
              You can add any sort of Food Items you like. Make sure you are
              providing real info.
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
                  defaultValue={user?.displayName || ""}
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
                  defaultValue={user?.email || ""}
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
                  className="w-full rounded-md focus:ring focus:ring-opacity-75  text-black focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <input
                  id="Add"
                  type="submit"
                  name="button"
                  value="Add/submit"
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

export default AddFood;
