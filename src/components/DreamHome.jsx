import house from "../assets/images/image2.webp";
import { motion } from "framer-motion";

const DreamHome = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.img
            src={house}
            alt="Dream Home"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-[30px] lg:rounded-[40px] shadow-2xl"
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Experience Card */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 120,
            }}
            whileHover={{
              scale: 1.08,
              y: -6,
            }}
            className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white rounded-3xl shadow-xl px-8 py-6"
          >
            <h2 className="text-4xl font-bold text-[#A67C52]">
              12+
            </h2>

            <p className="text-gray-500 mt-2">
              Years Experience
            </p>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#A67C52] font-semibold uppercase tracking-widest"
          >
            About Us
          </motion.p>

          <motion.h2
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
          >
            We Help You To Find
            <br />
            Your Dream Home
          </motion.h2>

          <motion.p
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-gray-600 leading-8 text-lg"
          >
            We specialize in connecting people with premium homes that
            perfectly match their lifestyle. From modern apartments to
            luxurious villas, our experienced team ensures a smooth and
            transparent buying experience.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center sm:text-left"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#A67C52]">
                8K+
              </h2>

              <p className="text-gray-500 mt-3">
                Premium Homes
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
            >
              <h2 className="text-5xl font-bold text-[#A67C52]">
                6K+
              </h2>

              <p className="text-gray-500 mt-3">
                Happy Clients
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.08,
                y: -6,
              }}
            >
              <h2 className="text-5xl font-bold text-[#A67C52]">
                2K+
              </h2>

              <p className="text-gray-500 mt-3">
                Expert Agents
              </p>
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            whileHover={{
              scale: 1.08,
              y: -4,
              boxShadow: "0px 15px 30px rgba(166,124,82,0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-[#A67C52] text-white px-8 py-4 rounded-full transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default DreamHome;