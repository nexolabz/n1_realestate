import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  FaSwimmingPool,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";

import {
  MdOutlinePayments,
  MdEventAvailable,
} from "react-icons/md";

import { HiOutlineViewGrid } from "react-icons/hi";

import PropertyGallery from "../components/PropertyGallery";
import PropertyInfo from "../components/PropertyInfo";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
// import GallerySection from "../components/GallerySection";

import villa7 from "../assets/images/villa7.webp";
import villa8 from "../assets/images/villa8.webp";
import villa9 from "../assets/images/villa9.webp";

import interior2 from "../assets/images/interior2.webp";
import interior3 from "../assets/images/interior3.webp";
import interior4 from "../assets/images/interior4.webp";

import bed1 from "../assets/images/bed1.webp";
import bed2 from "../assets/images/bed2.webp";
import bed3 from "../assets/images/bed3.webp";

const PropertyDetails = () => {

  const [activeTab, setActiveTab] = useState("amenities");

  const similarProperties = [
    {
      id: 7,
      image: villa7,
      title: "Luxury Green Villa",
      location: "Goa",
      bedrooms: 4,
      bathrooms: 3,
      area: "3600 sqft",
      price: "₹3.80 Cr",
    },
    {
      id: 8,
      image: villa8,
      title: "Royal Palm House",
      location: "Pune",
      bedrooms: 5,
      bathrooms: 4,
      area: "4500 sqft",
      price: "₹4.60 Cr",
    },
    {
      id: 9,
      image: villa9,
      title: "Modern Glass Villa",
      location: "Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: "3900 sqft",
      price: "₹3.95 Cr",
    },
  ];

  const menuItems = [
    {
      id: "amenities",
      title: "Amenities",
      icon: <FaSwimmingPool />,
    },
    {
      id: "floor",
      title: "Floor Plan",
      icon: <HiOutlineViewGrid />,
    },
    {
      id: "emi",
      title: "EMI Calculator",
      icon: <MdOutlinePayments />,
    },
    {
      id: "visit",
      title: "Schedule Visit",
      icon: <MdEventAvailable />,
    },
    {
      id: "nearby",
      title: "Nearby Places",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: "documents",
      title: "Documents",
      icon: <FaFileAlt />,
    },
  ];

  const [price, setPrice] = useState(34500000);
  const [downPayment, setDownPayment] = useState(5000000);
  const [interest, setInterest] = useState(8.5);
  const [years, setYears] = useState(20);
  const loanAmount = price - downPayment;

  const [visitForm, setVisitForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const monthlyInterest = interest / 12 / 100;

  const months = years * 12;

  const emi =
    (loanAmount *
      monthlyInterest *
      Math.pow(1 + monthlyInterest, months)) /
    (Math.pow(1 + monthlyInterest, months) - 1);

  const handleVisitChange = (e) => {
    setVisitForm({
      ...visitForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleVisitSubmit = (e) => {
    e.preventDefault();

    alert(
      `Visit Booked Successfully!\n\nName: ${visitForm.name}\nDate: ${visitForm.date}\nTime: ${visitForm.time}`
    );

    setVisitForm({
      name: "",
      phone: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="bg-[#FCFAF7] min-h-screen">

      <section className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-6">

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-[#A67C52] font-semibold hover:underline"
          >
            <FaArrowLeft />
            Back to Properties
          </Link>

          <p className="mt-4 text-gray-500">
            Home / Properties / Luxury Sky Villa
          </p>

        </div>
      </section>

      <PropertyGallery />
      <PropertyInfo />
      <section className="bg-[#FCFAF7] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Property Details
          </h2>

          <div className="grid lg:grid-cols-4 gap-8">

            {/* Left Sidebar */}

            <div className="bg-white rounded-3xl shadow-lg p-6 h-fit sticky top-28">

              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl mb-3 transition-all duration-300 ${activeTab === item.id
                    ? "bg-[#A67C52] text-white shadow-lg"
                    : "hover:bg-[#F8F4EF] text-gray-700"
                    }`}
                >
                  <span className="text-xl">
                    {item.icon}
                  </span>

                  <span className="font-medium">
                    {item.title}
                  </span>
                </button>
              ))}

            </div>

            {/* Right Content */}

            <div className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-8">

              {activeTab === "amenities" && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">
                    Luxury Amenities
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>🏊 Swimming Pool</div>
                    <div>🚗 Parking</div>
                    <div>🏋 Gym</div>
                    <div>🌳 Garden</div>
                    <div>🔐 Security</div>
                    <div>🛗 Lift</div>
                    <div>🎮 Kids Play Area</div>
                    <div>📶 High Speed WiFi</div>

                  </div>

                </div>
              )}

              {activeTab === "floor" && (
                <div>

                  <h2 className="text-3xl font-bold mb-8">
                    Floor Plan
                  </h2>

                  <p>Floor Plan Image Here</p>

                </div>
              )}

              {activeTab === "emi" && (
                <div>

                  <h2 className="text-3xl font-bold mb-8">
                    EMI Calculator
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">

                    <div>
                      <label className="font-semibold">
                        Property Price
                      </label>

                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full border rounded-xl p-4 mt-2"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">
                        Down Payment
                      </label>

                      <input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full border rounded-xl p-4 mt-2"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">
                        Interest Rate (%)
                      </label>

                      <input
                        type="number"
                        value={interest}
                        onChange={(e) => setInterest(Number(e.target.value))}
                        className="w-full border rounded-xl p-4 mt-2"
                      />
                    </div>

                    <div>
                      <label className="font-semibold">
                        Loan Tenure (Years)
                      </label>

                      <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full border rounded-xl p-4 mt-2"
                      />
                    </div>

                  </div>

                  <div className="mt-10 bg-[#A67C52] text-white rounded-2xl p-8">

                    <h3 className="text-2xl font-bold">
                      Estimated Monthly EMI
                    </h3>

                    <p className="text-5xl font-bold mt-4">
                      ₹ {Math.round(emi).toLocaleString("en-IN")}
                    </p>

                  </div>

                </div>
              )}

              {activeTab === "visit" && (
                <div>

                  <h2 className="text-3xl font-bold mb-8">
                    Schedule a Property Visit
                  </h2>

                  <form
                    onSubmit={handleVisitSubmit}
                    className="grid md:grid-cols-2 gap-6"
                  >

                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={visitForm.name}
                      onChange={handleVisitChange}
                      className="border rounded-xl p-4"
                      required
                    />

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={visitForm.phone}
                      onChange={handleVisitChange}
                      className="border rounded-xl p-4"
                      required
                    />

                    <input
                      type="date"
                      name="date"
                      value={visitForm.date}
                      onChange={handleVisitChange}
                      className="border rounded-xl p-4"
                      required
                    />

                    <input
                      type="time"
                      name="time"
                      value={visitForm.time}
                      onChange={handleVisitChange}
                      className="border rounded-xl p-4"
                      required
                    />

                    <button
                      type="submit"
                      className="md:col-span-2 bg-[#A67C52] text-white py-4 rounded-xl hover:bg-[#8B6843] transition"
                    >
                      Book Visit
                    </button>

                  </form>

                </div>
              )}

              {activeTab === "nearby" && (
                <div>

                  <h2 className="text-3xl font-bold mb-8">
                    Nearby Places
                  </h2>

                  <ul className="space-y-4">

                    <li>🏫 School - 1 km</li>
                    <li>🏥 Hospital - 2 km</li>
                    <li>🛒 Shopping Mall - 3 km</li>
                    <li>🚉 Metro Station - 2.5 km</li>

                  </ul>

                </div>
              )}

              {activeTab === "documents" && (
                <div>

                  <h2 className="text-3xl font-bold mb-8">
                    Property Documents
                  </h2>

                  <div className="space-y-5">

                    <div className="border rounded-2xl p-5">
                      ✅ Registry Available
                    </div>

                    <div className="border rounded-2xl p-5">
                      ✅ RERA Approved
                    </div>

                    <div className="border rounded-2xl p-5">
                      ✅ Home Loan Available
                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* Luxury Interior */}

      <section className="bg-[#FCFAF7] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-[#A67C52] uppercase tracking-[5px] font-semibold">
              Interior Gallery
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Designed For Luxury Living
            </h2>

            <p className="text-gray-500 mt-5">
              Explore every corner of this beautiful property.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <img
              src={interior2}
              alt=""
              className="w-full h-80 rounded-[25px] object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={interior3}
              alt=""
              className="w-full h-80 rounded-[25px] object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={interior4}
              alt=""
              className="w-full h-80 rounded-[25px] object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={bed1}
              alt=""
              className="w-full h-80 rounded-[25px] object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={bed2}
              alt=""
              className="w-full h-80 rounded-[25px] object-cover hover:scale-105 transition duration-500"
            />

            <img
              src={bed3}
              alt=""
              className="w-full h-80 rounded-[25px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>

      <section className="bg-[#FCFAF7] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <p className="text-[#A67C52] uppercase tracking-[5px] font-semibold">
              Similar Properties
            </p>

            <h2 className="text-5xl font-bold mt-3">
              You May Also Like
            </h2>

            <p className="text-gray-500 mt-5">
              Explore more luxury homes handpicked for you.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {similarProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                title={property.title}
                location={property.location}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                area={property.area}
                price={property.price}
              />
            ))}

          </div>

        </div>

      </section>
      <Newsletter />
      <Footer />

    </div>
  );
};

export default PropertyDetails;