import { motion } from "framer-motion";

import villa1 from "../assets/images/villa1.webp";
import interior1 from "../assets/images/interior1.webp";
import living1 from "../assets/images/living1.webp";
import kitchen1 from "../assets/images/kitchen1.webp";
import pool1 from "../assets/images/pool1.webp";

const images = [
  interior1,
  living1,
  kitchen1,
  pool1,
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
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

const PropertyGallery = () => {
  return (
    <section className="bg-[#FCFAF7] pt-28 pb-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-10"
        >

          <div>

            <p className="text-[#A67C52] uppercase tracking-[4px] font-semibold">
              Luxury Collection
            </p>

            <h2 className="text-5xl font-bold mt-2">
              Luxury Sky Villa
            </h2>

            <p className="text-gray-500 mt-3">
              📍 Bandra West, Mumbai
            </p>

          </div>

          <motion.span
            whileHover={{
              scale: 1.08,
              rotate: -2,
            }}
            className="bg-[#A67C52] text-white px-5 py-3 rounded-full"
          >
            5 Photos
          </motion.span>

        </motion.div>

        {/* Gallery */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >

          {/* Main Image */}

          <motion.div
            variants={item}
            whileHover={{
              y: -8,
            }}
            className="overflow-hidden rounded-[30px] shadow-xl"
          >

            <motion.img
              src={villa1}
              alt="Villa"
              className="w-full h-[620px] object-cover"
              whileHover={{
                scale: 1.08,
                rotate: 1,
              }}
              transition={{ duration: 0.5 }}
            />

          </motion.div>

          {/* Side Images */}

          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-6"
          >

            {images.map((img, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-[25px] shadow-lg"
              >

                <motion.img
                  src={img}
                  alt=""
                  className="w-full h-[295px] object-cover"
                  whileHover={{
                    scale: 1.08,
                    rotate: 1,
                  }}
                  transition={{ duration: 0.5 }}
                />

              </motion.div>
            ))}

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default PropertyGallery;