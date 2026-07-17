import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >

          {/* Logo */}

          <motion.div variants={item}>

            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-bold text-[#D4A373]"
            >
              Homyz
            </motion.h2>

            <p className="mt-6 text-gray-300 leading-8">
              We help you discover luxury homes and premium
              properties with complete transparency and trust.
            </p>

            <div className="flex gap-4 mt-8">

              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    y: -5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="w-11 h-11 rounded-full bg-[#D4A373] flex items-center justify-center hover:bg-white hover:text-[#A67C52]"
                >
                  {icon}
                </motion.a>
              ))}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div variants={item}>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Properties", path: "/properties" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-[#D4A373] transition"
                  >
                    <span>›</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}

            </ul>

          </motion.div>

          {/* Properties */}

          <motion.div variants={item}>

            <h3 className="text-2xl font-semibold mb-6">
              Properties
            </h3>

            <ul className="space-y-4 text-gray-300">

              {[
                "Luxury Villa",
                "Modern Apartment",
                "Penthouse",
                "Office Space",
              ].map((property, index) => (
                <motion.li
                  key={index}
                  whileHover={{
                    x: 8,
                    color: "#D4A373",
                  }}
                >
                  {property}
                </motion.li>
              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div variants={item}>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <motion.p
                whileHover={{ x: 8 }}
                className="flex items-center gap-3"
              >
                <FaMapMarkerAlt className="text-[#D4A373]" />
                Bhopal, Madhya Pradesh
              </motion.p>

              <motion.a
                whileHover={{ x: 8 }}
                href="tel:+919876543210"
                className="flex items-center gap-3 hover:text-[#D4A373]"
              >
                <FaPhoneAlt className="text-[#D4A373]" />
                +91 98765 43210
              </motion.a>

              <motion.a
                whileHover={{ x: 8 }}
                href="mailto:info@homyz.com"
                className="flex items-center gap-3 hover:text-[#D4A373]"
              >
                <FaEnvelope className="text-[#D4A373]" />
                info@homyz.com
              </motion.a>

            </div>

          </motion.div>

        </motion.div>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-12 border-gray-700 origin-left"
        />

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4"
        >

          <p>
            © 2026 Homyz. Designed & Developed by Ayush Kumar.
          </p>

          <div className="flex gap-6">

            <motion.a
              href="#"
              whileHover={{
                color: "#D4A373",
              }}
            >
              Privacy Policy
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                color: "#D4A373",
              }}
            >
              Terms & Conditions
            </motion.a>

          </div>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;