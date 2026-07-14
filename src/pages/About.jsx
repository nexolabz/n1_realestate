import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import villa9 from "../assets/images/villa9.webp";

const About = () => {
  return (
    <>
      {/* Hero Banner */}

      <section className="relative mt-20 h-[450px]">

        <img
          src={villa9}
          alt="About"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[6px] text-[#D4A373]">
              About Homyz
            </p>

            <h1 className="text-6xl font-bold mt-5">
              Building Dreams Into Reality
            </h1>

          </div>

        </div>

      </section>

      {/* About Content */}

      <section className="bg-[#FCFAF7] py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <img
            src={villa9}
            alt="Luxury Villa"
            className="rounded-[30px] shadow-xl h-[500px] w-full object-cover"
          />

          <div>

            <p className="text-[#A67C52] font-semibold uppercase tracking-[3px]">
              Who We Are
            </p>

            <h2 className="text-5xl font-bold mt-4">
              We Help Families Find Their Dream Home
            </h2>

            <p className="text-gray-600 leading-8 mt-8">
              Homyz is a modern real estate platform dedicated to helping
              people discover premium homes, luxury villas and apartments
              across India. Our mission is to make buying and renting
              properties simple, transparent and enjoyable.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-[#A67C52]">10K+</h3>
                <p className="text-gray-500 mt-2">Properties Listed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#A67C52]">5K+</h3>
                <p className="text-gray-500 mt-2">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#A67C52]">15+</h3>
                <p className="text-gray-500 mt-2">Cities Covered</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#A67C52]">8+</h3>
                <p className="text-gray-500 mt-2">Years Experience</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <Newsletter />
      <Footer />
    </>
  );
};

export default About;