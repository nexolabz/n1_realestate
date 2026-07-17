import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import villa6 from "../assets/images/villa6.webp";

const Login = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 overflow-hidden">

      {/* Left Side */}

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden lg:block overflow-hidden"
      >
        <motion.img
          src={villa6}
          alt="Login"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.05 }}
          className="w-full h-screen object-cover"
        />
      </motion.div>

      {/* Right Side */}

      <div className="flex items-center justify-center bg-[#FCFAF7] px-6">

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 90,
          }}
          whileHover={{ y: -5 }}
          className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[30px] shadow-2xl p-10"
        >

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center"
          >
            Welcome Back
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-500 mt-3"
          >
            Login to your Homyz account
          </motion.p>

          {/* Email */}

          <motion.input
            whileFocus={{
              scale: 1.02,
            }}
            transition={{ duration: 0.2 }}
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl px-5 py-4 mt-10 outline-none focus:border-[#A67C52] transition"
          />

          {/* Password */}

          <motion.input
            whileFocus={{
              scale: 1.02,
            }}
            transition={{ duration: 0.2 }}
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-5 py-4 mt-5 outline-none focus:border-[#A67C52] transition"
          />

          {/* Remember */}

          <div className="flex justify-between items-center mt-5 text-sm">

            <label className="flex items-center gap-2 cursor-pointer">
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

          {/* Login Button */}

          <motion.button
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0px 18px 35px rgba(166,124,82,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="w-full bg-[#A67C52] text-white py-4 rounded-xl mt-8"
          >
            Login
          </motion.button>

          {/* Register */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500 mt-8"
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#A67C52] font-semibold hover:underline"
            >
              Register
            </Link>
          </motion.p>

        </motion.div>

      </div>

    </section>
  );
};

export default Login;