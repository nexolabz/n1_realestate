import { FaStar, FaQuoteLeft } from "react-icons/fa";

import user1 from "../assets/images/user1.webp";
import user2 from "../assets/images/user2.webp";
import user3 from "../assets/images/user3.webp";

const reviews = [
  {
    id: 1,
    image: user1,
    name: "Rahul Sharma",
    role: "Home Buyer",
    review:
      "Homyz made my home-buying journey incredibly easy. Their team was professional, transparent, and always available to help.",
  },
  {
    id: 2,
    image: user2,
    name: "Priya Verma",
    role: "Property Investor",
    review:
      "Excellent service and beautiful property options. I found my dream apartment much faster than expected.",
  },
  {
    id: 3,
    image: user3,
    name: "Amit Singh",
    role: "Business Owner",
    review:
      "From property visits to documentation, everything was smooth and hassle-free. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="py-20 md:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-[#A67C52] uppercase tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of happy customers across India.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item) => (

            <div
              key={item.id}
              className="relative bg-[#FCFAF7] rounded-[30px] p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
            >

              {/* Quote */}

              <div className="absolute top-8 right-8 text-5xl text-[#A67C52]/20">
                <FaQuoteLeft />
              </div>

              {/* User */}

              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#E8D8CB]"
                />

                <div>

                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex gap-1 text-yellow-400 mt-6">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              {/* Review */}

              <p className="mt-6 text-gray-600 leading-8">
                {item.review}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;