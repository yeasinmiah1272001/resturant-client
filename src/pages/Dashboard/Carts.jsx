import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa"; // Importing icons
import SectionTitle from "../../components/SectionTitle";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Carts = () => {
  const [carts, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();

  const totalPrice = carts.reduce((acc, item) => acc + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  // Function to handle item update (example, just logs item id)
  const handleUpdate = (id) => {
    console.log(`Update item with id: ${id}`);
  };

  return (
    <div>
      <SectionTitle heading={"Carts Page"} />
      <div className="flex items-center justify-between mb-4">
        <h1>Total Items: {carts.length}</h1>
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Image</th>
              <th className="px-4 py-2 text-left border-b">Title</th>
              <th className="px-4 py-2 text-left border-b">Price</th>
              <th className="px-4 py-2 text-left border-b">Quantity</th>
              <th className="px-4 py-2 text-left border-b">Total</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2 flex space-x-4">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FaTrashAlt /> {/* Delete icon */}
                  </button>
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleUpdate(item.id)}
                  >
                    <FaEdit /> {/* Edit icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Carts;
