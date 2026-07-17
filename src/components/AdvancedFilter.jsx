import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRulerCombined } from "react-icons/fa";
import { HiMiniHomeModern } from "react-icons/hi2";
import { MdMeetingRoom } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const AdvancedFilter = ({
  filters,
  setFilters,
}) => {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-[#FCFAF7] py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 90,
          }}
          whileHover={{ y: -4 }}
          className="bg-white rounded-[30px] shadow-xl p-8"
        >

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >

            <p className="uppercase tracking-[4px] text-[#A67C52] font-semibold">
              Find Your Dream Property
            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* City */}

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
            >

              <label>City</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2 hover:border-[#A67C52] transition">

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaMapMarkerAlt className="text-[#A67C52]" />
                </motion.div>

                <select
                  name="location"
                  value={filters.location}
                  onChange={handleChange}
                  className="w-full outline-none"
                >
                  <option value="">All Cities</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                  <option>Goa</option>
                </select>

              </div>

            </motion.div>

            {/* Property */}

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
            >

              <label>Property</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2 hover:border-[#A67C52] transition">

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <HiMiniHomeModern className="text-[#A67C52]" />
                </motion.div>

                <select
                  name="type"
                  value={filters.type}
                  onChange={handleChange}
                  className="w-full outline-none"
                >
                  <option value="">All</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                </select>

              </div>

            </motion.div>

            {/* Bedrooms */}

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
            >

              <label>BHK</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2 hover:border-[#A67C52] transition">

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <MdMeetingRoom className="text-[#A67C52]" />
                </motion.div>

                <select
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleChange}
                  className="w-full outline-none"
                >
                  <option value="">Any</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5 BHK</option>
                </select>

              </div>

            </motion.div>

            {/* Area */}

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
            >

              <label>Area</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2 hover:border-[#A67C52] transition">

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaRulerCombined className="text-[#A67C52]" />
                </motion.div>

                <select className="w-full outline-none">
                  <option>Any</option>
                  <option>1000 sqft</option>
                  <option>2000 sqft</option>
                </select>

              </div>

            </motion.div>

          </div>

          {/* Button */}

          <motion.button
            whileHover={{
              scale: 1.03,
              y: -3,
              boxShadow: "0px 20px 40px rgba(166,124,82,0.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="mt-8 w-full bg-[#A67C52] text-white py-4 rounded-xl flex justify-center items-center gap-3"
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
              <FiSearch />
            </motion.div>

            Search Property

          </motion.button>

        </motion.div>

      </div>

    </section>
  );
};

export default AdvancedFilter;