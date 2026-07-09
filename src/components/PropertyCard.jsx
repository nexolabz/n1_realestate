import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
} from "react-icons/fa6";

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
  return (
    <div className="group bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Featured Badge */}

        <span className="absolute top-5 left-5 bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm font-semibold">
          Featured
        </span>

        <span className="absolute top-16 left-5 bg-green-600 text-white px-3 py-1 rounded-full text-xs">
          Verified
        </span>

        {/* Wishlist */}

        <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#A67C52] hover:text-white transition duration-300">

          <FaHeart />

        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        {/* Title */}

        <h3 className="text-2xl font-bold text-gray-900">
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

          <div className="flex items-center gap-2">

            <FaBed className="text-[#A67C52]" />

            <span>{bedrooms} Beds</span>

          </div>

          <div className="flex items-center gap-2">

            <FaBath className="text-[#A67C52]" />

            <span>{bathrooms} Baths</span>

          </div>

          <div className="flex items-center gap-2">

            <FaRulerCombined className="text-[#A67C52]" />

            <span>{area}</span>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8">

          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">(4.9)</span>
          </div>

          <h2 className="text-3xl font-bold text-[#A67C52] mt-3">
            {price}
          </h2>

          <p className="text-green-600 font-medium mt-2">
            Ready to Move
          </p>

          <Link
            to={`/properties/${id}`}
            className="mt-6 inline-block bg-[#A67C52] text-white px-6 py-3 rounded-full hover:bg-[#8B6843] transition duration-300"
          >
            Explore Property →
          </Link>

        </div>

      </div>

    </div>
  );
};

export default PropertyCard;