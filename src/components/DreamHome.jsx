import house from "../assets/images/image2.jpg";

const DreamHome = () => {
  return (
    <section
      id="about"
     className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Image */}

        <div className="relative">

          <img
            src={house}
            alt="Dream Home"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-[30px] lg:rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-500"
          />

          {/* Experience Card */}

          <div className="absolute bottom-4 right-4 md:-bottom-8 md:-right-8 bg-white rounded-3xl shadow-xl px-8 py-6">

            <h2 className="text-4xl font-bold text-[#A67C52]">
              12+
            </h2>

            <p className="text-gray-500 mt-2">
              Years Experience
            </p>

          </div>

        </div>

        {/* Right */}

        <div>

          <p className="text-[#A67C52] font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            We Help You To Find
            <br />
            Your Dream Home
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            We specialize in connecting people with premium homes that
            perfectly match their lifestyle. From modern apartments to
            luxurious villas, our experienced team ensures a smooth and
            transparent buying experience.
          </p>

          {/* Stats */}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center sm:text-left">

            <div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#A67C52]">
                8K+
              </h2>

              <p className="text-gray-500 mt-3">
                Premium Homes
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#A67C52]">
                6K+
              </h2>

              <p className="text-gray-500 mt-3">
                Happy Clients
              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold text-[#A67C52]">
                2K+
              </h2>

              <p className="text-gray-500 mt-3">
                Expert Agents
              </p>

            </div>

          </div>

          <button className="mt-12 bg-[#A67C52] text-white px-8 py-4 rounded-full hover:bg-[#8B6843] hover:scale-105 transition-all duration-300">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
};

export default DreamHome;