import React from "react";
import {
  FaWallet,
  FaUsers,
  FaClipboardList,
  FaShoppingCart,
} from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: state } = useQuery({
    queryKey: ["admin-states"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });

  const pieChartData = [
    { name: "Revenue", value: state?.revenue || 0 },
    { name: "Customers", value: state?.users || 1500 },
    { name: "Products", value: state?.menuItems || 103 },
    { name: "Orders", value: state?.orders || 500 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57"];

  return (
    <div className="p-8">
      <SectionTitle heading={"Admin Home"} />

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-purple-100 p-4 rounded-lg shadow-md flex items-center">
          <FaWallet className="text-purple-600 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Revenue</h2>
            <p className="text-lg">${state?.revenue || 0}</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center">
          <FaUsers className="text-yellow-600 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Customers</h2>
            <p className="text-lg">{state?.users || 1500}</p>
          </div>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg shadow-md flex items-center">
          <FaClipboardList className="text-pink-600 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Products</h2>
            <p className="text-lg">{state?.menuItems || 103}</p>
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center">
          <FaShoppingCart className="text-blue-600 text-3xl mr-4" />
          <div>
            <h2 className="text-xl font-bold">Orders</h2>
            <p className="text-lg">{state?.orders || 500}</p>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Data Visualization - Pie Charts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {/* First Pie Chart */}
          <div className="flex justify-center">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx={200}
                cy={200}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </div>

          {/* Second Pie Chart (Donut Type) */}
          <div className="flex justify-center">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={120}
                fill="#82ca9d"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
