import PropertyCard from "./PropertyCard";

import img1 from "../assets/images/villa1.jpg";
import img2 from "../assets/images/villa2.jpg";
import img3 from "../assets/images/villa3.jpg";
import img4 from "../assets/images/villa4.jpg";
import img5 from "../assets/images/villa5.jpg";
import img6 from "../assets/images/villa6.jpg";

const properties = [
  {
    id: 1,
    image: img1,
    title: "Modern Luxury Villa",
    location: "Mumbai",
    bedrooms: 4,
    bathrooms: 3,
    area: "3200 sqft",
    price: "₹2.45 Cr",
  },
  {
    id: 2,
    image: img2,
    title: "Premium Apartment",
    location: "Bangalore",
    bedrooms: 3,
    bathrooms: 2,
    area: "2100 sqft",
    price: "₹1.65 Cr",
  },
  {
    id: 3,
    image: img3,
    title: "Luxury Penthouse",
    location: "Delhi",
    bedrooms: 5,
    bathrooms: 4,
    area: "4200 sqft",
    price: "₹4.20 Cr",
  },
  {
    id: 4,
    image: img4,
    title: "Family Villa",
    location: "Hyderabad",
    bedrooms: 4,
    bathrooms: 3,
    area: "2800 sqft",
    price: "₹2.10 Cr",
  },
  {
    id: 5,
    image: img5,
    title: "Modern House",
    location: "Pune",
    bedrooms: 3,
    bathrooms: 2,
    area: "2200 sqft",
    price: "₹1.80 Cr",
  },
  {
    id: 6,
    image: img6,
    title: "Royal Mansion",
    location: "Goa",
    bedrooms: 6,
    bathrooms: 5,
    area: "5500 sqft",
    price: "₹7.80 Cr",
  },
];

const PopularProperties = () => {
  return (
    <section
      id="properties"
      className="bg-[#FCFAF7] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">

          <div>

            <p className="text-[#A67C52] uppercase tracking-widest font-semibold">
              Our Collection
            </p>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4">
              Popular Properties
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl text-lg">
              Explore our handpicked luxury properties in India's most desirable
              locations. Find the perfect home that matches your lifestyle.
            </p>

          </div>

          <button className="mt-8 lg:mt-0 w-full sm:w-auto bg-[#A67C52] text-white px-8 py-4 rounded-full hover:bg-[#8B6843] hover:scale-105 transition-all duration-300">
            View All Properties
          </button>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {properties.map((property) => (
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
  );
};

export default PopularProperties;