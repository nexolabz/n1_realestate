import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section
      id="contact"
     className="py-20 md:py-28 bg-[#FCFAF7]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        <div className="bg-[#A67C52] rounded-[40px] px-8 lg:px-16 py-16 text-center text-white shadow-2xl">

          <p className="uppercase tracking-widest font-semibold text-white/80">
            Newsletter
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
            Subscribe For Latest
            <br />
            Property Updates
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-8">
            Get notified about premium properties, special offers,
            and the latest real estate news directly in your inbox.
          </p>

          {/* Input */}

          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl md:rounded-full p-2 flex flex-col md:flex-row gap-3">

            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-6 py-4 rounded-full outline-none text-gray-700"
            />

            <button className="bg-[#8B6843] hover:bg-[#755735] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300">

              <FaPaperPlane />

              Subscribe

            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;