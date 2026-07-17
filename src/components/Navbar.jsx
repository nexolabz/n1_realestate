import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { FiSearch } from "react-icons/fi";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Properties", path: "/properties" },
    { name: "Contact", path: "/contact" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-4 md:px-6 lg:px-8">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={Logo}
              alt="Homyz"
              className="w-20 h-20 object-contain"
            />

            <div className="leading-tight">
              <h1 className="text-4xl font-extrabold text-[#A67C52]">
                Homyz
              </h1>

              <p className="text-sm text-gray-500">
                Luxury Real Estate
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">

          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#A67C52] font-semibold border-b-2 border-[#A67C52] pb-1"
                    : "text-gray-700 hover:text-[#A67C52] transition duration-300"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* Login Button */}

        <div className="hidden md:flex items-center gap-4">

          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login"
              className="bg-[#A67C52] text-white px-7 py-3 rounded-full hover:bg-[#8B6843] transition-all duration-300"
            >
              Login
            </Link>
          </motion.div>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#A67C52]"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >

          <ul className="flex flex-col items-center gap-6 py-6">

            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#A67C52] font-semibold"
                      : "text-gray-700"
                  }
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-[#A67C52] text-white px-6 py-3 rounded-full"
            >
              Login
            </Link>

          </ul>

        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;