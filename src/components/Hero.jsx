import iron from "../assets/images/image6.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#FCFAF7] pt-28 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#A67C52] font-semibold uppercase tracking-widest"
            >
              Discover Your Dream Home
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900"
            >
              Find Your
              <br />
              Perfect Place
              <br />
              To Live
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-base md:text-lg text-gray-600 leading-8 max-w-xl"
            >
              Explore beautiful homes and apartments in premium locations.
              Discover a place that perfectly matches your lifestyle and
              future dreams.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -4,
                  boxShadow: "0 12px 25px rgba(166,124,82,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#A67C52] text-white w-full sm:w-auto px-8 py-4 rounded-full transition-all duration-300"
              >
                Explore Now
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#A67C52] text-[#A67C52] w-full sm:w-auto px-8 py-4 rounded-full hover:bg-[#A67C52] hover:text-white transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-14 text-center"
            >
              <motion.div whileHover={{ scale: 1.08 }}>
                <h2 className="text-4xl font-bold text-[#A67C52]">8K+</h2>
                <p className="text-gray-500 mt-2">Premium Houses</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }}>
                <h2 className="text-4xl font-bold text-[#A67C52]">6K+</h2>
                <p className="text-gray-500 mt-2">Happy Clients</p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }}>
                <h2 className="text-4xl font-bold text-[#A67C52]">2K+</h2>
                <p className="text-gray-500 mt-2">Expert Agents</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.img
              src={iron}
              alt="Luxury House"
              className="w-full max-w-[650px] lg:max-w-[720px] object-contain"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
              }}
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;