import { FaLocationDot, FaIndianRupeeSign } from "react-icons/fa6";
import { HiMiniHomeModern } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
   <section className="relative z-20 -mt-10 md:-mt-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

       <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 border border-gray-100">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Location */}

            <div className="bg-[#F8F4EF] rounded-2xl px-5 py-4 flex items-center gap-4">

              <FaLocationDot className="text-[#A67C52] text-xl" />

              <div className="w-full">

                <p className="text-sm text-gray-500">
                  Location
                </p>

                <input
                  type="text"
                  placeholder="Search by City"
                  className="w-full bg-transparent outline-none text-gray-800 font-medium"
                />

              </div>

            </div>

            {/* Property */}

            <div className="bg-[#F8F4EF] rounded-2xl px-5 py-4 flex items-center gap-4">

              <HiMiniHomeModern className="text-[#A67C52] text-2xl" />

              <div className="w-full">

                <p className="text-sm text-gray-500">
                  Property
                </p>

                <select className="w-full bg-transparent outline-none text-gray-800 font-medium">
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>
                  <option>Office</option>
                </select>

              </div>

            </div>

            {/* Price */}

            <div className="bg-[#F8F4EF] rounded-2xl px-5 py-4 flex items-center gap-4">

              <FaIndianRupeeSign className="text-[#A67C52] text-xl" />

              <div className="w-full">

                <p className="text-sm text-gray-500">
                  Budget
                </p>

                <select className="w-full bg-transparent outline-none text-gray-800 font-medium">
                  <option>₹20L - ₹50L</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹3Cr</option>
                  <option>₹3Cr+</option>
                </select>

              </div>

            </div>

            {/* Search Button */}

            <button className="w-full bg-[#A67C52] text-white rounded-2xl flex items-center justify-center gap-3 text-lg font-semibold hover:bg-[#8B6843] hover:scale-105 transition-all duration-300 py-4">

              <FiSearch className="text-xl" />

              Search

            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SearchBar;