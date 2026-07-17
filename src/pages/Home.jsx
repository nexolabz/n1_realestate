import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import DreamHome from "../components/DreamHome";
import WhyChoose from "../components/WhyChoose";
import PopularProperties from "../components/PopularProperties";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <SearchBar />
      <DreamHome />
      <WhyChoose />
      <PopularProperties />
      <Newsletter />
      <Footer/> 
    </>
  );
};

export default Home;