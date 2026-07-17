import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#FCFAF7] overflow-hidden px-6">

      {/* Background Circles */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute w-72 h-72 rounded-full bg-[#A67C52]/10 -top-20 -left-20"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full bg-[#A67C52]/5 -bottom-28 -right-28"
      />

      {/* Content */}

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 90,
        }}
        whileHover={{
          y: -5,
        }}
        className="relative bg-white rounded-[30px] shadow-2xl px-10 py-14 max-w-xl w-full text-center"
      >

        <motion.h1
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-8xl md:text-9xl font-bold text-[#A67C52]"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mt-5 text-3xl font-bold text-gray-800"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="mt-5 text-gray-600 leading-7"
        >
          Sorry, the page you are looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-10 bg-[#A67C52] text-white px-8 py-4 rounded-full shadow-lg"
          >
            Back to Home

            <motion.span
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
};

export default NotFound;