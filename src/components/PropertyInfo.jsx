import { motion } from "framer-motion";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBed className="mx-auto text-3xl text-[#A67C52]" />,
    value: "4",
    title: "Bedrooms",
  },
  {
    icon: <FaBath className="mx-auto text-3xl text-[#A67C52]" />,
    value: "3",
    title: "Bathrooms",
  },
  {
    icon: <FaRulerCombined className="mx-auto text-3xl text-[#A67C52]" />,
    value: "3200",
    title: "Sq Ft",
  },
  {
    icon: <FaCheckCircle className="mx-auto text-3xl text-[#A67C52]" />,
    value: "Ready",
    title: "To Move",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const PropertyInfo = () => {
  return (
    <section className="bg-[#FCFAF7] py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-12"
        >

          {/* Left */}

          <motion.div
            variants={item}
            className="lg:col-span-2"
          >

            <motion.span
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold"
            >
              ✓ Verified Property
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6">
              Luxury Sky Villa
            </h2>

            <p className="flex items-center gap-2 text-gray-500 mt-4 text-lg">
              <FaMapMarkerAlt className="text-[#A67C52]" />
              Bandra West, Mumbai
            </p>

            <motion.h3
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="text-4xl font-bold text-[#A67C52] mt-8"
            >
              ₹3.45 Crore
            </motion.h3>

            {/* Features */}

            <motion.div
              variants={container}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
            >

              {features.map((feature, index) => (

                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                  }}
                  className="bg-white rounded-2xl shadow-lg p-5 text-center"
                >

                  {feature.icon}

                  <h4 className="font-bold mt-3 text-xl">
                    {feature.value}
                  </h4>

                  <p className="text-gray-500">
                    {feature.title}
                  </p>

                </motion.div>

              ))}

            </motion.div>

            {/* Description */}

            <motion.div
              variants={item}
              className="mt-12"
            >

              <h3 className="text-3xl font-bold mb-6">
                Description
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                Experience luxury living in this premium villa located in
                Bandra West, Mumbai. This beautifully designed property
                offers spacious bedrooms, elegant interiors, a modern
                kitchen, landscaped garden, private swimming pool, and
                premium amenities, making it an ideal home for families
                looking for comfort, style, and convenience.
              </p>

            </motion.div>

          </motion.div>

          {/* Right */}

          <motion.div
            variants={item}
          >

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="bg-white rounded-3xl shadow-xl p-8 sticky top-28"
            >

              <h3 className="text-3xl font-bold">
                Contact Agent
              </h3>

              <p className="text-gray-500 mt-3">
                Schedule a property visit today.
              </p>

              <motion.input
                whileFocus={{
                  scale: 1.02,
                }}
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 mt-8 outline-none focus:border-[#A67C52] transition"
              />

              <motion.input
                whileFocus={{
                  scale: 1.02,
                }}
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3 mt-4 outline-none focus:border-[#A67C52] transition"
              />

              <motion.input
                whileFocus={{
                  scale: 1.02,
                }}
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3 mt-4 outline-none focus:border-[#A67C52] transition"
              />

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                  boxShadow: "0px 20px 40px rgba(166,124,82,0.35)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="w-full bg-[#A67C52] text-white py-4 rounded-xl mt-6"
              >
                Schedule Visit
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="w-full border-2 border-[#A67C52] text-[#A67C52] py-4 rounded-xl mt-4 hover:bg-[#A67C52] hover:text-white transition"
              >
                Contact Agent
              </motion.button>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default PropertyInfo;