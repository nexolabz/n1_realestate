import { FaMapMarkerAlt, FaRulerCombined } from "react-icons/fa";
import { HiMiniHomeModern } from "react-icons/hi2";
import { MdMeetingRoom } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const AdvancedFilter = ({
  filters,
  setFilters,
}) => {

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-[#FCFAF7] py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-[30px] shadow-xl p-8">

          <div className="mb-8">

            <p className="uppercase tracking-[4px] text-[#A67C52] font-semibold">
              Find Your Dream Property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* City */}

            <div>

              <label>City</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2">

               <FaMapMarkerAlt className="text-[#A67C52]" />

                <select
                  name="location"
                  value={filters.location}
                  onChange={handleChange}
                  className="w-full outline-none"
                >

                  <option value="">All Cities</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Pune</option>
                  <option>Goa</option>

                </select>

              </div>

            </div>

            {/* Type */}

            <div>

              <label>Property</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2">

                <HiMiniHomeModern className="text-[#A67C52]" />

                <select
                  name="type"
                  value={filters.type}
                  onChange={handleChange}
                  className="w-full outline-none"
                >

                  <option value="">All</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Penthouse</option>

                </select>

              </div>

            </div>

            {/* Bedrooms */}

            <div>

              <label>BHK</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2">

                <MdMeetingRoom className="text-[#A67C52]" />

                <select
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleChange}
                  className="w-full outline-none"
                >

                  <option value="">Any</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5 BHK</option>

                </select>

              </div>

            </div>

            {/* Area */}

            <div>

              <label>Area</label>

              <div className="flex items-center gap-3 border rounded-xl px-4 py-4 mt-2">

                <FaRulerCombined className="text-[#A67C52]" />

                <select className="w-full outline-none">

                  <option>Any</option>
                  <option>1000 sqft</option>
                  <option>2000 sqft</option>

                </select>

              </div>

            </div>

          </div>

          <button className="mt-8 w-full bg-[#A67C52] text-white py-4 rounded-xl flex justify-center items-center gap-2">

            <FiSearch />

            Search Property

          </button>

        </div>

      </div>
    </section>
  );
};

export default AdvancedFilter;