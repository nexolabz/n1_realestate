import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFAF7] px-6">
      <h1 className="text-8xl font-bold text-[#A67C52]">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 bg-[#A67C52] text-white px-8 py-3 rounded-full hover:bg-[#8B6843] transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;