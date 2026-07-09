import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import villa7 from "../assets/images/villa7.jpg";

const Contact = () => {
  return (
    <>
      {/* Banner */}

      <section className="relative mt-20 h-[400px]">

        <img
          src={villa7}
          alt="Contact"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="uppercase tracking-[6px] text-[#D4A373]">
              Contact Us
            </p>

            <h1 className="text-6xl font-bold mt-5">
              Get In Touch
            </h1>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="bg-[#FCFAF7] py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <p className="text-[#A67C52] font-semibold uppercase">
              Contact Information
            </p>

            <h2 className="text-5xl font-bold mt-4">
              We'd Love To Hear From You
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Whether you're looking to buy, sell, or rent a property,
              our team is here to help you every step of the way.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-bold">📍 Address</h4>
                <p className="text-gray-500">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

              <div>
                <h4 className="font-bold">📞 Phone</h4>
                <p className="text-gray-500">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <h4 className="font-bold">✉ Email</h4>
                <p className="text-gray-500">
                  info@homyz.com
                </p>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="bg-white p-8 rounded-[30px] shadow-xl">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-4 rounded-xl mb-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-4 rounded-xl mb-5 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-4 rounded-xl mb-5 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Message"
              className="w-full border p-4 rounded-xl outline-none"
            ></textarea>

            <button className="mt-6 w-full bg-[#A67C52] text-white py-4 rounded-xl hover:bg-[#8B6843] transition">
              Send Message
            </button>

          </div>

        </div>

      </section>

      <Newsletter />
      <Footer />

    </>
  );
};

export default Contact;