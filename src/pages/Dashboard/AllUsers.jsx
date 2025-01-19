import React from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaTrash, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"Manage All Users"}
        subHeading={"---How many---"}
      />
      <h1 className="text-xl font-bold mb-4">Total Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Serial</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Admin Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <FaUserShield size={30} className="text-green-500 inline" />
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center gap-4">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrash />
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

export default AllUsers;
