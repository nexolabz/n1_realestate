import {
  FaUserTie,
  FaHandshake,
  FaClipboardCheck,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaUserTie />,
    title: "Expert Guidance",
    desc: "Our experienced real estate professionals guide you through every step of buying your dream home.",
  },
  {
    id: 2,
    icon: <FaHandshake />,
    title: "Trusted Partnership",
    desc: "We build long-term relationships based on honesty, trust, and complete customer satisfaction.",
  },
  {
    id: 3,
    icon: <FaClipboardCheck />,
    title: "Transparent Process",
    desc: "From documentation to final purchase, everything is clear, secure, and hassle-free.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to answer your questions whenever you need.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#FCFAF7] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#A67C52] font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 text-gray-900">
            Why People Trust Homyz
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            We provide a premium real estate experience with trusted agents,
            verified properties, transparent deals, and exceptional customer
            support.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (

            <div
              key={service.id}
             className="bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 group"
            >

              {/* Icon */}

              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#F8F4EF] flex items-center justify-center text-4xl text-[#A67C52] group-hover:bg-[#A67C52] group-hover:text-white transition-all duration-300">

                {service.icon}

              </div>

              {/* Title */}

              <h3 className="text-xl md:text-2xl font-bold mt-6 text-gray-900">

                {service.title}

              </h3>

              {/* Description */}

              <p className="mt-5 text-gray-600 leading-7">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;