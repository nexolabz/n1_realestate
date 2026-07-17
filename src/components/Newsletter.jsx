import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FCFAF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 90,
          }}
          whileHover={{ y: -5 }}
          className="relative overflow-hidden bg-[#A67C52] rounded-[40px] px-8 lg:px-16 py-16 text-center text-white shadow-2xl"
        >

          {/* Background Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white blur-3xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-widest font-semibold text-white/80 relative z-10"
          >
            Newsletter
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight relative z-10"
          >
            Subscribe For Latest
            <br />
            Property Updates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-8 relative z-10"
          >
            Get notified about premium properties, special offers,
            and the latest real estate news directly in your inbox.
          </motion.p>

          {/* Input */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl md:rounded-full p-2 flex flex-col md:flex-row gap-3 relative z-10"
          >

            <motion.input
              whileFocus={{
                scale: 1.02,
              }}
              transition={{ duration: 0.2 }}
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-6 py-4 rounded-full outline-none text-gray-700"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 18px 35px rgba(0,0,0,0.25)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-[#8B6843] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3"
            >
              <motion.div
                animate={{
                  x: [0, 5, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              >
                <FaPaperPlane />
              </motion.div>

              Subscribe
            </motion.button>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Newsletter;