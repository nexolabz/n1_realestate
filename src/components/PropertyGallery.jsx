import villa1 from "../assets/images/villa1.jpg";
import interior1 from "../assets/images/interior1.jpg";
import living1 from "../assets/images/living1.jpg";
import kitchen1 from "../assets/images/kitchen1.jpg";
import pool1 from "../assets/images/pool1.jpg";

const PropertyGallery = () => {
  return (
    <section className="bg-[#FCFAF7] pt-28 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <p className="text-[#A67C52] uppercase tracking-[4px] font-semibold">
              Luxury Collection
            </p>

            <h2 className="text-5xl font-bold mt-2">
              Luxury Sky Villa
            </h2>

            <p className="text-gray-500 mt-3">
              📍 Bandra West, Mumbai
            </p>

          </div>

          <span className="bg-[#A67C52] text-white px-5 py-3 rounded-full">
            5 Photos
          </span>

        </div>

        {/* Gallery */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Main Image */}

          <div className="overflow-hidden rounded-[30px]">

            <img
              src={villa1}
              alt="Villa"
              className="w-full h-[620px] object-cover hover:scale-110 transition duration-700"
            />

          </div>

          {/* Right Images */}

          <div className="grid grid-cols-2 gap-6">

            <div className="overflow-hidden rounded-[25px]">
              <img
                src={interior1}
                alt=""
                className="w-full h-[295px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="overflow-hidden rounded-[25px]">
              <img
                src={living1}
                alt=""
                className="w-full h-[295px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="overflow-hidden rounded-[25px]">
              <img
                src={kitchen1}
                alt=""
                className="w-full h-[295px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

            <div className="overflow-hidden rounded-[25px]">
              <img
                src={pool1}
                alt=""
                className="w-full h-[295px] object-cover hover:scale-110 transition duration-700"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PropertyGallery;