import { motion } from "framer-motion";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import villa7 from "../assets/images/villa7.webp";

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

const Contact = () => {
  return (
    <>
      {/* Hero Banner */}

      <section className="relative mt-20 h-[400px] overflow-hidden">

        <motion.img
          src={villa7}
          alt="Contact"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center text-white"
          >

            <p className="uppercase tracking-[6px] text-[#D4A373]">
              Contact Us
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-5">
              Get In Touch
            </h1>

          </motion.div>

        </div>

      </section>

      {/* Contact Section */}

      <section className="bg-[#FCFAF7] py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
          >

            {/* Left */}

            <motion.div variants={item}>

              <p className="text-[#A67C52] font-semibold uppercase">
                Contact Information
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                We'd Love To Hear From You
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                Whether you're looking to buy, sell, or rent a property,
                our team is here to help you every step of the way.
              </p>

              <div className="mt-10 space-y-6">

                {[
                  {
                    title: "📍 Address",
                    value: "Bhopal, Madhya Pradesh, India",
                  },
                  {
                    title: "📞 Phone",
                    value: "+91 98765 43210",
                  },
                  {
                    title: "✉ Email",
                    value: "info@homyz.com",
                  },
                ].map((info, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className="bg-white rounded-2xl shadow-md p-5"
                  >

                    <h4 className="font-bold">
                      {info.title}
                    </h4>

                    <p className="text-gray-500 mt-2">
                      {info.value}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            {/* Contact Form */}

            <motion.div
              variants={item}
              whileHover={{
                y: -5,
              }}
              className="bg-white p-8 rounded-[30px] shadow-xl"
            >

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Full Name"
                className="w-full border p-4 rounded-xl mb-5 outline-none focus:border-[#A67C52] transition"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Email"
                className="w-full border p-4 rounded-xl mb-5 outline-none focus:border-[#A67C52] transition"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                placeholder="Subject"
                className="w-full border p-4 rounded-xl mb-5 outline-none focus:border-[#A67C52] transition"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows="6"
                placeholder="Message"
                className="w-full border p-4 rounded-xl outline-none focus:border-[#A67C52] transition"
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
                className="mt-6 w-full bg-[#A67C52] text-white py-4 rounded-xl"
              >
                Send Message
              </motion.button>

            </motion.div>

          </motion.div>

        </div>

      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;