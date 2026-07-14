import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import AdvancedFilter from "../components/AdvancedFilter";
import { useState } from "react";

import villa1 from "../assets/images/villa1.webp";
import villa2 from "../assets/images/villa2.webp";
import villa3 from "../assets/images/villa3.webp";
import villa4 from "../assets/images/villa4.webp";
import villa5 from "../assets/images/villa5.webp";
import villa6 from "../assets/images/villa6.webp";

import banner from "../assets/images/villa8.webp";
const Properties = () => {
    const [filters, setFilters] = useState({
        location: "",
        type: "",
        bedrooms: "",
    });

    const [sortBy, setSortBy] = useState("default");
    const [showFavorites, setShowFavorites] = useState(false);

    const properties = [
        {
            id: 1,
            image: villa1,
            title: "Luxury Sky Villa",
            location: "Mumbai",
            type: "Villa",
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
            type: "Apartment",
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
            type: "Villa",
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
            type: "Villa",
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
            type: "Penthouse",
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
            type: "Villa",
            bedrooms: 3,
            bathrooms: 3,
            area: "2600 sqft",
            price: "₹2.95 Cr",
        },
    ];

    const filteredProperties = properties.filter((property) => {

        const cityMatch =
            filters.location === "" ||
            property.location === filters.location;

        const typeMatch =
            filters.type === "" ||
            property.type === filters.type;

        const bedroomMatch =
            filters.bedrooms === "" ||
            property.bedrooms === Number(filters.bedrooms);

        return cityMatch && typeMatch && bedroomMatch;

    });

   

    const sortedProperties = [...filteredProperties];

    if (sortBy === "low") {
        sortedProperties.sort(
            (a, b) =>
                Number(a.price.replace(/[₹,\sCr]/g, "")) -
                Number(b.price.replace(/[₹,\sCr]/g, ""))
        );
    }

    if (sortBy === "high") {
        sortedProperties.sort(
            (a, b) =>
                Number(b.price.replace(/[₹,\sCr]/g, "")) -
                Number(a.price.replace(/[₹,\sCr]/g, ""))
        );
    }

     const favoriteIds =
        JSON.parse(localStorage.getItem("favorites")) || [];

    const favoriteProperties = sortedProperties.filter((property) =>
        favoriteIds.includes(property.id)
    );

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

            <AdvancedFilter
                filters={filters}
                setFilters={setFilters}
            />

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

                        <div className="flex items-center gap-5">

                            <label className="flex items-center gap-3">

                                <input
                                    type="checkbox"
                                    checked={showFavorites}
                                    onChange={() => setShowFavorites(!showFavorites)}
                                    className="w-5 h-5 accent-[#A67C52]"
                                />

                                <span className="font-medium">
                                    Show Favorites Only
                                </span>

                            </label>

                            <p className="text-gray-600 font-semibold">
                               Showing {showFavorites ? favoriteProperties.length : sortedProperties.length} Properties
                            </p>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-[#A67C52]"
                            >

                                <option value="default">Sort By</option>

                                <option value="low">
                                    Price : Low → High
                                </option>

                                <option value="high">
                                    Price : High → Low
                                </option>

                            </select>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {(showFavorites ? favoriteProperties : sortedProperties).map(
                            (property) => (
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