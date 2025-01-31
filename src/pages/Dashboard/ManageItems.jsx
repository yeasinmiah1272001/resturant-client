import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        // if (res.data.deletedCount > 0) {
        //   // refetch to update the ui
        //   //   refetch();
        //   Swal.fire({
        //     position: "top-end",
        //     icon: "success",
        //     title: `${item.name} has been deleted`,
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        // }
      }
    });
  };
  return (
    <div className="p-6">
      <SectionTitle heading={"Manage Items"} subHeading={"-- Hurry up --"} />
      <h1 className="text-red-500 font-semibold text-2xl">
        TotalItems : {menu.length}
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
                key={item.id}
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
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit className="text-xl" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrashAlt
                        onClick={() => handleDeleteItem(item)}
                        className="text-xl"
                      />
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
