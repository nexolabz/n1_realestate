import { FaLocationDot, FaIndianRupeeSign } from "react-icons/fa6";
import { HiMiniHomeModern } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <section className="relative z-20 -mt-10 md:-mt-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            y: -5,
          }}
          className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 border border-gray-100"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Location */}

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8F4EF] rounded-2xl px-5 py-4 flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
              >
                <FaLocationDot className="text-[#A67C52] text-xl" />
              </motion.div>

              <div className="w-full">
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <input
                  type="text"
                  placeholder="Search by City"
                  className="w-full bg-transparent outline-none text-gray-800 font-medium"
                />
              </div>
            </motion.div>

            {/* Property */}

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8F4EF] rounded-2xl px-5 py-4 flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
              >
                <HiMiniHomeModern className="text-[#A67C52] text-2xl" />
              </motion.div>

              <div className="w-full">
                <p className="text-sm text-gray-500">
                  Property
                </p>

                <select className="w-full bg-transparent outline-none text-gray-800 font-medium">
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                  <option>Office</option>
                </select>
              </div>
            </motion.div>

            {/* Budget */}

            <motion.div
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8F4EF] rounded-2xl px-5 py-4 flex items-center gap-4"
            >
              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{ duration: 0.6 }}
              >
                <FaIndianRupeeSign className="text-[#A67C52] text-xl" />
              </motion.div>

              <div className="w-full">
                <p className="text-sm text-gray-500">
                  Budget
                </p>

                <select className="w-full bg-transparent outline-none text-gray-800 font-medium">
                  <option>₹20L - ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹3Cr</option>
                  <option>₹3Cr+</option>
                </select>
              </div>
            </motion.div>

            {/* Search Button */}

            <motion.button
              whileHover={{
                scale: 1.06,
                y: -4,
                boxShadow: "0px 18px 35px rgba(166,124,82,0.35)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-full bg-[#A67C52] text-white rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold py-4"
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <FiSearch className="text-xl" />
              </motion.div>

              Search
            </motion.button>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default SearchBar;