import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import user1 from "../assets/images/user1.webp";
import user2 from "../assets/images/user2.webp";
import user3 from "../assets/images/user3.webp";

const reviews = [
  {
    id: 1,
    image: user1,
    name: "Rahul Sharma",
    role: "Home Buyer",
    review:
      "Homyz made my home-buying journey incredibly easy. Their team was professional, transparent, and always available to help.",
  },
  {
    id: 2,
    image: user2,
    name: "Priya Verma",
    role: "Property Investor",
    review:
      "Excellent service and beautiful property options. I found my dream apartment much faster than expected.",
  },
  {
    id: 3,
    image: user3,
    name: "Amit Singh",
    role: "Business Owner",
    review:
      "From property visits to documentation, everything was smooth and hassle-free. Highly recommended!",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#A67C52] uppercase tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of happy customers across India.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0px 25px 45px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#FCFAF7] rounded-[30px] p-6 md:p-8 shadow-lg overflow-hidden group cursor-pointer"
            >
              {/* Background Glow */}

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />

              {/* Quote */}

              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute top-8 right-8 text-5xl text-[#A67C52]/20"
              >
                <FaQuoteLeft />
              </motion.div>

              {/* User */}

              <div className="relative z-10 flex items-center gap-4">

                <motion.img
                  src={item.image}
                  alt={item.name}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#E8D8CB]"
                />

                <div>
                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

              {/* Rating */}

              <motion.div
                className="relative z-10 flex gap-1 text-yellow-400 mt-6"
                whileHover={{
                  scale: 1.08,
                }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    whileHover={{
                      scale: 1.4,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaStar />
                  </motion.div>
                ))}
              </motion.div>

              {/* Review */}

              <p className="relative z-10 mt-6 text-gray-600 leading-8">
                {item.review}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;