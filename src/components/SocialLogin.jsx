import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleLogin = () => {
    googleLogin().then((result) => {
      const user = result.user;
      const userInfo = {
        email: user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };
  return (
    <button
      onClick={handleLogin}
      className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300"
    >
      <FaGoogle />
    </button>
  );
};

export default SocialLogin;
