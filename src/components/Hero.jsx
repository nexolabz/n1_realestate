import iron from "../assets/images/image6.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#FCFAF7] pt-28 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="text-[#A67C52] font-semibold uppercase tracking-widest">
              Discover Your Dream Home
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Find Your
              <br />
              Perfect Place
              <br />
              To Live
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 leading-8 max-w-xl">
              Explore beautiful homes and apartments in premium locations.
              Discover a place that perfectly matches your lifestyle and
              future dreams.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <button className="bg-[#A67C52] text-white w-full sm:w-auto px-8 py-4 rounded-full hover:bg-[#8B6843] hover:scale-105 duration-300">
                Explore Now
              </button>

              <button className="border border-[#A67C52] text-[#A67C52] w-full sm:w-auto px-8 py-4 rounded-full hover:bg-[#A67C52] hover:text-white duration-300">
                Learn More
              </button>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-14 text-center">

              <div>
                <h2 className="text-4xl font-bold text-[#A67C52]">
                  8K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Premium Houses
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#A67C52]">
                  6K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Happy Clients
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#A67C52]">
                  2K+
                </h2>

                <p className="text-gray-500 mt-2">
                  Expert Agents
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={iron}
              alt="Luxury House"
              className="w-full max-w-[650px] lg:max-w-[720px] object-contain hover:scale-105 transition-all duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;