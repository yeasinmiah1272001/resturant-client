import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";

const useCarts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [carts, refetch];
};

export default useCarts;
