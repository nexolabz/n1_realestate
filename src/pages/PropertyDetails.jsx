import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import PropertyGallery from "../components/PropertyGallery";
import PropertyInfo from "../components/PropertyInfo";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
// import GallerySection from "../components/GallerySection";

import villa7 from "../assets/images/villa7.jpg";
import villa8 from "../assets/images/villa8.jpg";
import villa9 from "../assets/images/villa9.jpg";

import interior2 from "../assets/images/interior2.jpg";
import interior3 from "../assets/images/interior3.jpg";
import interior4 from "../assets/images/interior4.jpg";

import bed1 from "../assets/images/bed1.jpg";
import bed2 from "../assets/images/bed2.jpg";
import bed3 from "../assets/images/bed3.jpg";

const PropertyDetails = () => {
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