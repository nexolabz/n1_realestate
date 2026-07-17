import { motion } from "framer-motion";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import villa9 from "../assets/images/villa9.webp";

const stats = [
  {
    number: "10K+",
    title: "Properties Listed",
  },
  {
    number: "5K+",
    title: "Happy Clients",
  },
  {
    number: "15+",
    title: "Cities Covered",
  },
  {
    number: "8+",
    title: "Years Experience",
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

const About = () => {
  return (
    <>
      {/* Hero */}

      <section className="relative mt-20 h-[450px] overflow-hidden">

        <motion.img
          src={villa9}
          alt="About"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center text-white"
          >

            <p className="uppercase tracking-[6px] text-[#D4A373]">
              About Homyz
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-5">
              Building Dreams Into Reality
            </h1>

          </motion.div>

        </div>

      </section>

      {/* About */}

      <section className="bg-[#FCFAF7] py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >

            {/* Image */}

            <motion.div variants={item}>

              <motion.img
                src={villa9}
                alt="Luxury Villa"
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                transition={{ duration: 0.4 }}
                className="rounded-[30px] shadow-xl h-[500px] w-full object-cover"
              />

            </motion.div>

            {/* Content */}

            <motion.div variants={item}>

              <p className="text-[#A67C52] font-semibold uppercase tracking-[3px]">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                We Help Families Find Their Dream Home
              </h2>

              <p className="text-gray-600 leading-8 mt-8">
                Homyz is a modern real estate platform dedicated to helping
                people discover premium homes, luxury villas and apartments
                across India. Our mission is to make buying and renting
                properties simple, transparent and enjoyable.
              </p>

              {/* Stats */}

              <motion.div
                variants={container}
                className="grid grid-cols-2 gap-6 mt-10"
              >

                {stats.map((stat, index) => (

                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >

                    <motion.h3
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                      }}
                      className="text-4xl font-bold text-[#A67C52]"
                    >
                      {stat.number}
                    </motion.h3>

                    <p className="text-gray-500 mt-2">
                      {stat.title}
                    </p>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>

          </motion.div>

        </div>

      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default About;