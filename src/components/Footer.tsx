import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Shipping Policy</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Payment Methods</a></li>
              <li><a href="#" className="hover:underline">Accessibility</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">AbilityOne Program</a></li>
              <li><a href="#" className="hover:underline">AbilityOne.Com</a></li>
              <li><a href="#" className="hover:underline">Privacy & Security</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>

          {/* Offers & Promotions */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Offers & Promotions</h3>
            <button className="w-48 bg-red-600 text-white font-bold py-3 rounded-none mb-6 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Subscribe</button>
            <div className="w-full">
              <h4 className="text-base font-bold mb-2">Share Our Story</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" aria-label="Facebook" className="bg-white text-primary-dark rounded-none w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"><FaFacebook /></a>
                <a href="#" aria-label="Twitter" className="bg-white text-primary-dark rounded-none w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn" className="bg-white text-primary-dark rounded-none w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"><FaLinkedin /></a>
                <a href="#" aria-label="Email" className="bg-white text-primary-dark rounded-none w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-200 transition-colors"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-white text-sm opacity-80">
          &copy; {new Date().getFullYear()} Copyright
        </div>
      </div>
    </footer>
  );
}; 