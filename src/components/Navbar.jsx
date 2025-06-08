import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => setMobileOpen(false), 1000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold text-cyan-600"
          onClick={(e) => handleLinkClick(e, '#hero')}
        >
          ManiGandan
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition font-medium"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md border border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 overflow-hidden shadow-inner"
          >
            {navLinks.map(({ name, href }) => (
              <li
                key={name}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <a
                  href={href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900 transition"
                  onClick={(e) => handleLinkClick(e, href)}
                >
                  {name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
