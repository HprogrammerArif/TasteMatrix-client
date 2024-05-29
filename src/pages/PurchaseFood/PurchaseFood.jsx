import { Helmet } from "react-helmet-async";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PurchaseFood = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [buyingDate, setBuyingDate] = useState("");
  const { id } = useParams();
  //console.log(id);

  const handlePurchaseFood = (e) => {
    e.preventDefault();

    const form = e.target;
    const food_name = form.foodName.value;
    const food_category = form.foodCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buying_date = form.date.value;
    const purchase_by = form.userName.value;
    const userEmail = form.userEmail.value;

    //send data to backend or server

    if (user && user.email) {
      //send cart item to the database

      const newFoodItem = {
        food_name,
        food_category,
        price,
        quantity,
        buying_date,
        purchase_by,
        userEmail,
        id
      };
      console.log(newFoodItem);

      axiosSecure.post("/purchase", newFoodItem).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Prchase item sucessfully`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refatch the cart to update the cart items
          //refetch()
          form.reset();
          navigate("/my-order");
        }
      });
    }
  };

  useEffect(() => {
    const getCurrentDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    setBuyingDate(getCurrentDate());
  }, []);

  return (
    <div>
      <Helmet>
        <title>Purchase Food Items || TasteMatrix</title>
      </Helmet>
      <section className="p-10 bg-gradient-to-l from-green-100 to-violet-200 text-black">
        <form
          onSubmit={handlePurchaseFood}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 w-[70%] mx-auto rounded-md shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-gray-100">
            <h2 className="text-3xl col-span-4 text-center bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent font-bold">
              <Typewriter words={["Purchase Food Items"]} loop={true} />
              ..
            </h2>
            <p className="text-center col-span-4 px-4">
              You can Purchase This Food Items by Clicking puchase button.
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
                  className="w-full rounded-md  py-2 border border-black"
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
                  className="w-full rounded-md   py-2 border border-black "
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
                  className="w-full rounded-md py-2 border border-black"
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
                  className="w-full rounded-md py-2 border border-black focus:ring focus:ring-opacity-75  text-gray-900 focus:ring-violet-400 "
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="buying-date" className="text-sm">
                  Buying Date
                </label>
                <input
                  id="buying-date"
                  type="date"
                  required
                  name="date"
                  value={buyingDate}
                  className="w-full rounded-md py-2 border border-black"
                  onChange={(e) => setBuyingDate(e.target.value)}
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
                  disabled
                  name="userName"
                  placeholder="Enter user name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 py-2 border border-black"
                />
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <label htmlFor="website" className="text-sm">
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  name="userEmail"
                  defaultValue={user?.email || ""}
                  required
                  disabled
                  placeholder="Enter User Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 py-2 border border-black"
                />
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <input
                  id="Add"
                  type="submit"
                  name="button"
                  value="Purchas"
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

export default PurchaseFood;
