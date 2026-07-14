import { Link } from "react-router-dom";

import villa6 from "../assets/images/villa6.webp";

const Login = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">

      {/* Left Side */}

      <div className="hidden lg:block">

        <img
          src={villa6}
          alt="Login"
          className="w-full h-screen object-cover"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-[#FCFAF7] px-6">

        <div className="w-full max-w-md bg-white rounded-[30px] shadow-2xl p-10">

          <h2 className="text-4xl font-bold text-center">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Login to your Homyz account
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-5 py-4 mt-10 outline-none focus:border-[#A67C52]"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-5 py-4 mt-5 outline-none focus:border-[#A67C52]"
          />

          <div className="flex justify-between items-center mt-5 text-sm">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember Me

            </label>

            <Link
              to="/"
              className="text-[#A67C52] hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          <button className="w-full bg-[#A67C52] text-white py-4 rounded-xl mt-8 hover:bg-[#8B6843] transition">
            Login
          </button>

          <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <span className="text-[#A67C52] cursor-pointer">
              Register
            </span>
          </p>

        </div>

      </div>

    </section>
  );
};

export default Login;