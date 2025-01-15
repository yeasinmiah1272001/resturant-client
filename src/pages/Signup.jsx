import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaApple, FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log("user", user);
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign up
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-gray-500 mb-4">Or login with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300">
              <FaFacebookF />
            </button>
            <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition duration-300">
              <FaGoogle />
            </button>
            <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition duration-300">
              <FaApple />
            </button>
            <button className="bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition duration-300">
              <FaCoffee />
            </button>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-4">
          already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
