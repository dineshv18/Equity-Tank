import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-3 bg-gray-950 p-2 rounded-l-xl z-50 overflow-hidden">
      <a
        href="tel:+919315071969"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded p-1 hover:bg-sky-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <IoCall size={18} />
      </a>
      <a
        href="mailto:service@equitytank.com?subject=Hello Equity Tank!&body=I am interested in your Classes."
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded p-1 hover:bg-red-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <IoIosMail size={18} />
      </a>
      <a
        href="https://www.instagram.com/equitytank/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded p-1 hover:bg-pink-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaInstagram size={18} />
      </a>
      <a
        href="https://www.facebook.com/equitytank"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded p-1 hover:bg-blue-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaFacebookSquare size={18} />
      </a>
      <a
        href="http://www.youtube.com/@EquityTank"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded p-1 hover:bg-red-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaYoutube size={18} />
      </a>
    </div>
  );
};

export default SocialLinks;
