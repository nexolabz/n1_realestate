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

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-4xl font-bold text-[#D4A373]">
              Homyz
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              We help you discover luxury homes and premium
              properties with complete transparency and trust.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#D4A373] flex items-center justify-center hover:scale-110 hover:bg-white hover:text-[#A67C52] transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#D4A373] flex items-center justify-center hover:scale-110 hover:bg-white hover:text-[#A67C52] transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#D4A373] flex items-center justify-center hover:scale-110 hover:bg-white hover:text-[#A67C52] transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#D4A373] flex items-center justify-center hover:scale-110 hover:bg-white hover:text-[#A67C52] transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link to="/" className="hover:text-[#D4A373] transition">
                  Home
                </Link>

                <Link to="/about" className="hover:text-[#D4A373] transition">
                  About
                </Link>

                <Link to="/properties" className="hover:text-[#D4A373] transition">
                  Properties
                </Link>

                <Link to="/contact" className="hover:text-[#D4A373] transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Property */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Properties
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Luxury Villa</li>
              <li>Modern Apartment</li>
              <li>Penthouse</li>
              <li>Office Space</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#D4A373]" />
                Bhopal, Madhya Pradesh
              </p>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 hover:text-[#D4A373]"
              >
                <FaPhoneAlt className="text-[#D4A373]" />
                +91 98765 43210
              </a>
              <a
                href="mailto:info@homyz.com"
                className="flex items-center gap-3 hover:text-[#D4A373]"
              >
                <FaEnvelope className="text-[#D4A373]" />
                info@homyz.com
              </a>

            </div>

          </div>

        </div>

        <hr className="my-12 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">

          <p>
            © 2026 Homyz. Designed & Developed by Ayush Kumar.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-[#D4A373]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#D4A373]">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;