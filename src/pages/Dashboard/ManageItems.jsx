import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

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
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "users has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-6">
      <SectionTitle heading={"Manage Items"} subHeading={"-- Hurry up --"} />
      <h1 className="text-red-500 font-semibold text-2xl">
        Total Items: {menu.length}
      </h1>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">
                Ser No
              </th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">
                Image
              </th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">
                Price
              </th>
              <th className="py-3 px-6 text-left font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr
                key={item._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6 font-medium text-gray-800">
                  {item.name}
                </td>
                <td className="py-3 px-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="py-3 px-6 text-gray-700">${item.price}</td>
                <td className="py-3 px-6">
                  <div className="flex gap-4 items-center">
                    <Link
                      to={`/dashboard/update/${item._id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit className="text-xl" />
                    </Link>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(item._id)}
                    >
                      <FaTrashAlt className="text-xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
