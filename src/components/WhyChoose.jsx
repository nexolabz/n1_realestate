import {
  FaUserTie,
  FaHandshake,
  FaClipboardCheck,
  FaHeadset,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: "Expert Guidance",
    desc: "Our experienced real estate professionals guide you through every step of buying your dream home.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Trusted Partnership",
    desc: "We build long-term relationships based on honesty, trust, and complete customer satisfaction.",
  },
  {
    id: 3,
    icon: <FaClipboardCheck />,
    title: "Transparent Process",
    desc: "From documentation to final purchase, everything is clear, secure, and hassle-free.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to answer your questions whenever you need.",
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

const WhyChoose = () => {
  return (
    <section className="bg-[#FCFAF7] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#A67C52] font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 text-gray-900">
            Why People Trust Homyz
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We provide a premium real estate experience with trusted agents,
            verified properties, transparent deals, and exceptional customer
            support.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-lg group cursor-pointer overflow-hidden relative"
            >
              {/* Background Glow */}

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#A67C52]/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.15,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#F8F4EF] flex items-center justify-center text-4xl text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-300"
              >
                {service.icon}
              </motion.div>

              {/* Title */}

              <h3 className="relative z-10 text-xl md:text-2xl font-bold mt-6 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}

              <p className="relative z-10 mt-5 text-gray-600 leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChoose;