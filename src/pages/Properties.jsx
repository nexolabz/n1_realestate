import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";

import villa1 from "../assets/images/villa1.jpg";
import villa2 from "../assets/images/villa2.jpg";
import villa3 from "../assets/images/villa3.jpg";
import villa4 from "../assets/images/villa4.jpg";
import villa5 from "../assets/images/villa5.jpg";
import villa6 from "../assets/images/villa6.jpg";

import banner from "../assets/images/villa8.jpg";
const Properties = () => {
const properties = [
    {
        id: 1,
        image: villa1,
        title: "Luxury Sky Villa",
        location: "Mumbai",
        bedrooms: 4,
        bathrooms: 3,
        area: "3200 sqft",
        price: "₹3.45 Cr",
    },
    {
        id: 2,
        image: villa2,
        title: "Modern Apartment",
        location: "Bangalore",
        bedrooms: 3,
        bathrooms: 2,
        area: "2200 sqft",
        price: "₹2.10 Cr",
    },
    {
        id: 3,
        image: villa3,
        title: "Royal Mansion",
        location: "Delhi",
        bedrooms: 5,
        bathrooms: 4,
        area: "4800 sqft",
        price: "₹5.90 Cr",
    },
    {
        id: 4,
        image: villa4,
        title: "Premium Villa",
        location: "Hyderabad",
        bedrooms: 4,
        bathrooms: 3,
        area: "3500 sqft",
        price: "₹3.80 Cr",
    },
    {
        id: 5,
        image: villa5,
        title: "Luxury Penthouse",
        location: "Pune",
        bedrooms: 4,
        bathrooms: 4,
        area: "4100 sqft",
        price: "₹4.25 Cr",
    },
    {
        id: 6,
        image: villa6,
        title: "Family Villa",
        location: "Goa",
        bedrooms: 3,
        bathrooms: 3,
        area: "2600 sqft",
        price: "₹2.95 Cr",
    },
];
return (

    <>
        {/* Banner */}

        <section className="relative mt-20 h-[450px]">

            <img
                src={banner}
                alt="Properties"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center text-white">

                    <p className="uppercase tracking-[6px] text-[#D4A373]">
                        Premium Collection
                    </p>

                    <h1 className="text-6xl font-bold mt-5">
                        Explore Luxury Properties
                    </h1>

                    <p className="mt-5 text-lg text-gray-200">
                        Discover premium villas and apartments across India.
                    </p>

                </div>

            </div>

        </section>

        {/* Search Filter */}

        <section className="bg-[#FCFAF7] py-12 -mt-16 relative z-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-white rounded-[30px] shadow-2xl p-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

                        {/* Location */}

                        <input
                            type="text"
                            placeholder="📍 Location"
                            className="border rounded-xl px-5 py-4 outline-none focus:border-[#A67C52]"
                        />

                        {/* Property */}

                        <select className="border rounded-xl px-5 py-4 outline-none">

                            <option>Property Type</option>
                            <option>Villa</option>
                            <option>Apartment</option>
                            <option>Penthouse</option>

                        </select>

                        {/* BHK */}

                        <select className="border rounded-xl px-5 py-4 outline-none">

                            <option>BHK</option>
                            <option>2 BHK</option>
                            <option>3 BHK</option>
                            <option>4 BHK</option>
                            <option>5 BHK</option>

                        </select>

                        {/* Budget */}

                        <select className="border rounded-xl px-5 py-4 outline-none">

                            <option>Budget</option>
                            <option>₹50L - ₹1Cr</option>
                            <option>₹1Cr - ₹2Cr</option>
                            <option>₹2Cr - ₹5Cr</option>

                        </select>

                        {/* Search */}

                        <button className="bg-[#A67C52] text-white rounded-xl hover:bg-[#8B6843] transition">
                            Search
                        </button>

                    </div>

                </div>

            </div>

        </section>

        <section className="bg-[#FCFAF7] py-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center mb-12">

                    <div>

                        <p className="text-[#A67C52] uppercase tracking-[4px]">
                            Premium Collection
                        </p>

                        <h2 className="text-5xl font-bold mt-3">
                            Featured Properties
                        </h2>

                    </div>

                    <button className="border border-[#A67C52] text-[#A67C52] px-6 py-3 rounded-full hover:bg-[#A67C52] hover:text-white transition">
                        View All
                    </button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

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

        {/* Newsletter */}

        <Newsletter />

        {/* Footer */}

        <Footer />
    </>
);
};

export default Properties;