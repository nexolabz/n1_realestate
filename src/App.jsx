import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/properties/:id" element={<PropertyDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;