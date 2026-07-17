import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
} from "react-icons/fa6";

const cardVariant = {
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
      duration: 0.7,
    },
  },
};

const PropertyCard = ({
  id,
  image,
  title,
  location,
  bedrooms,
  bathrooms,
  area,
  price,
}) => {
  const [favorite, setFavorite] = useState(() => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    return favorites.includes(id);
  });

  useEffect(() => {
    let favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorite) {
      if (!favorites.includes(id)) {
        favorites.push(id);
      }
    } else {
      favorites = favorites.filter((item) => item !== id);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorite, id]);

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.02,
        boxShadow: "0px 25px 45px rgba(0,0,0,0.18)",
      }}
      className="group bg-white rounded-[30px] overflow-hidden shadow-lg relative"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        {/* Shine Effect */}

        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 pointer-events-none">
          <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/30 blur-xl group-hover:left-[140%] transition-all duration-1000"></div>
        </div>

        <motion.img
          src={image}
          alt={title}
          whileHover={{
            scale: 1.12,
            rotate: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="w-full h-72 object-cover"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Featured */}

        <motion.span
          whileHover={{
            scale: 1.08,
          }}
          className="absolute top-5 left-5 bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          Featured
        </motion.span>

        {/* Verified */}

        <motion.span
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute top-16 left-5 bg-green-600 text-white px-3 py-1 rounded-full text-xs"
        >
          Verified
        </motion.span>

        {/* Wishlist */}

        <motion.button
          whileTap={{
            scale: 0.8,
          }}
          whileHover={{
            scale: 1.15,
          }}
          onClick={() => setFavorite(!favorite)}
          className={`absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition ${
            favorite
              ? "bg-red-500 text-white"
              : "bg-white text-gray-500 hover:bg-[#A67C52] hover:text-white"
          }`}
        >
          <motion.div
            animate={
              favorite
                ? {
                    scale: [1, 1.4, 1],
                  }
                : {}
            }
            transition={{
              duration: 0.4,
            }}
          >
            <FaHeart />
          </motion.div>
        </motion.button>

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Title */}

        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#A67C52] transition">
          {title}
        </h3>

        {/* Location */}

        <div className="flex items-center gap-2 mt-3 text-gray-500">

          <FaLocationDot className="text-[#A67C52]" />

          <span>{location}</span>

        </div>

        <p className="text-sm text-[#A67C52] mt-2 font-semibold">
          Luxury Villa
        </p>

        {/* Features */}

        <div className="flex justify-between mt-6 text-gray-500">

          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <FaBed className="text-[#A67C52]" />
            <span>{bedrooms} Beds</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <FaBath className="text-[#A67C52]" />
            <span>{bathrooms} Baths</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <FaRulerCombined className="text-[#A67C52]" />
            <span>{area}</span>
          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-8">

          {/* Rating */}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <motion.span
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-yellow-500 text-lg"
            >
              ★★★★★
            </motion.span>

            <span className="text-gray-500 text-sm">
              (4.9)
            </span>
          </motion.div>

          {/* Price */}

          <motion.h2
            whileHover={{
              scale: 1.05,
            }}
            className="text-3xl font-bold text-[#A67C52] mt-3"
          >
            {price}
          </motion.h2>

          <motion.p
            animate={{
              opacity: [1, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-green-600 font-medium mt-2"
          >
            Ready to Move
          </motion.p>

          {/* Button */}

          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              to={`/properties/${id}`}
              className="mt-6 inline-flex items-center gap-2 bg-[#A67C52] text-white px-6 py-3 rounded-full hover:bg-[#8B6843] transition duration-300"
            >
              Explore Property

              <motion.span
                animate={{
                  x: [0, 5, 0],
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

        </div>

      </div>

    </motion.div>
  );
};

export default PropertyCard;