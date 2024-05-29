import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/my-order/${user?.email}`);
    
    setFoods(data);
  };
  console.log(foods);

 

  const handleDelete = async (id) => {
    try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/delete-item/${id}`);
      console.log(data);
      toast.success("Delete successful");

      // Update UI
      getData();

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
  };

  return (
    <div>
      <div className=" text-center mb-10 bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent font-bold">
        <h2 className="text-4xl">Total Purchase Order: {foods.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food Owner</th>
              <th>Name</th>
              <th>Price</th>
              <th>Buying Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  {/* <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.food_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div> */}
                  {item.purchase_by}
                </td>
                <td>{item.food_name}</td>
                <td>${item.price}</td>
                <td>{item.buying_date}</td>
                <th>
                  <Link
                    onClick={() => handleDelete(item._id)}
                    //foodsItem={item}
                    className="btn btn-ghost btn-lg "
                  >
                    <MdDeleteForever className="text-red-600"></MdDeleteForever>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
