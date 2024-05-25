import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyAddedFood = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/my-added-item/${user?.email}`);
    setFoods(data);
  };
  console.log(foods);

  // const handleDelete = (id) => {
  //   console.log(id);
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axiosSecure.delete(`/carts/${id}`).then((res) => {
  //         if (res.data.deletedCount > 0) {
  //           refatch();
  //           Swal.fire({
  //             title: "Deleted!",
  //             text: "Your file has been deleted.",
  //             icon: "success",
  //           });
  //         }
  //       });
  //     }
  //   });
  // };

  return (
    <div>
      <div className=" text-center mb-10 bg-gradient-to-r from-green-700 to-violet-800 bg-clip-text text-transparent font-bold">
        <h2 className="text-4xl">Total Added Food: {foods.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.food_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.food_name}</td>
                <td>${item.price}</td>
                <th>
                  <Link
                    //onClick={() => handleDelete(item._id)}
                    to={`/update-food-item/${item._id}`}
                    //foodsItem={item}
                    className="btn btn-ghost btn-lg "
                  >
                    <FaEdit className="text-green-600"></FaEdit>
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

export default MyAddedFood;
