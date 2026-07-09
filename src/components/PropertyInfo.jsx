import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const PropertyInfo = () => {
  return (
    <section className="bg-[#FCFAF7] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div className="lg:col-span-2">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✓ Verified Property
            </span>

            <h2 className="text-5xl font-bold mt-6">
              Luxury Sky Villa
            </h2>

            <p className="flex items-center gap-2 text-gray-500 mt-4 text-lg">
              <FaMapMarkerAlt className="text-[#A67C52]" />
              Bandra West, Mumbai
            </p>

            <h3 className="text-4xl font-bold text-[#A67C52] mt-8">
              ₹3.45 Crore
            </h3>

            {/* Features */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

              <div className="bg-white rounded-2xl shadow p-5 text-center">

                <FaBed className="mx-auto text-3xl text-[#A67C52]" />

                <h4 className="font-bold mt-3 text-xl">
                  4
                </h4>

                <p className="text-gray-500">
                  Bedrooms
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow p-5 text-center">

                <FaBath className="mx-auto text-3xl text-[#A67C52]" />

                <h4 className="font-bold mt-3 text-xl">
                  3
                </h4>

                <p className="text-gray-500">
                  Bathrooms
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow p-5 text-center">

                <FaRulerCombined className="mx-auto text-3xl text-[#A67C52]" />

                <h4 className="font-bold mt-3 text-xl">
                  3200
                </h4>

                <p className="text-gray-500">
                  Sq Ft
                </p>

              </div>

              <div className="bg-white rounded-2xl shadow p-5 text-center">

                <FaCheckCircle className="mx-auto text-3xl text-[#A67C52]" />

                <h4 className="font-bold mt-3 text-xl">
                  Ready
                </h4>

                <p className="text-gray-500">
                  To Move
                </p>

              </div>

            </div>

            {/* Description */}

            <div className="mt-12">

              <h3 className="text-3xl font-bold mb-6">
                Description
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                Experience luxury living in this premium villa located in
                Bandra West, Mumbai. This beautifully designed property
                offers spacious bedrooms, elegant interiors, a modern
                kitchen, landscaped garden, private swimming pool, and
                premium amenities, making it an ideal home for families
                looking for comfort, style, and convenience.
              </p>

            </div>

          </div>

          {/* Right Card */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-28">

              <h3 className="text-3xl font-bold">
                Contact Agent
              </h3>

              <p className="text-gray-500 mt-3">
                Schedule a property visit today.
              </p>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl px-4 py-3 mt-8 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3 mt-4 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3 mt-4 outline-none"
              />

              <button className="w-full bg-[#A67C52] text-white py-4 rounded-xl mt-6 hover:bg-[#8B6843] transition">
                Schedule Visit
              </button>

              <button className="w-full border-2 border-[#A67C52] text-[#A67C52] py-4 rounded-xl mt-4 hover:bg-[#A67C52] hover:text-white transition">
                Contact Agent
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PropertyInfo;