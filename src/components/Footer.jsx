
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-cyan-300 py-10  border-t border-cyan-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left - Copyright */}
        <div className="text-center md:text-left text-lg font-semibold">
          © {new Date().getFullYear()} Abi Software. All rights reserved.
        </div>

        {/* Center - Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Manigandan13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mani-gandan-5b8833219"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jaiselvi13072005@gmail.com"
            className="hover:text-white transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right - Location */}
        <div className="flex items-center space-x-2 text-sm">
          <FaMapMarkerAlt className="text-cyan-400" />
          <span>Vellore, Tamil Nadu, India</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;