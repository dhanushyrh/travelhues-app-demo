import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="absolute px-6 py-12 inset-x-0 bootom-0 bg-white z-50 text-left font-poppins text-gray-600">
      <div className="  ">
        {/* Top Section */}
        <div className="flex lg:py-12 lg:pl-24 flex-col items-left text-left">
          {/* Logo */}
          <span className="text-4xl font-bold text-blue-600">≈</span>

          {/* Tagline */}
          <p className="mt-2 max-w-md text-sm">
            Making the world a better place through constructing elegant hierarchies.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaInstagram size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaXTwitter size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaGithub size={20} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900"><FaYoutube size={20} /></a>
          </div>
        </div>

        {/* Grid Links Section */}
        <div className="grid grid-cols-2 lg:pl-24 md:grid-cols-4 gap-8 mt-8 text-sm">
          <div>
            <h3 className="text-gray-900 font-semibold">Solutions</h3>
            <ul className="mt-2 text-sm/8 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">Analytics</a></li>
              <li><a href="#" className="hover:text-gray-900">Automation</a></li>
              <li><a href="#" className="hover:text-gray-900">Commerce</a></li>
              <li><a href="#" className="hover:text-gray-900">Insights</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Support</h3>
            <ul className="mt-2 text-sm/8 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Submit ticket</a></li>
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-900">Guides</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Company</h3>
            <ul className="mt-2 text-sm/8 space-y-2">
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Jobs</a></li>
              <li><a href="#" className="hover:text-gray-900">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold">Legal</h3>
            <ul className="mt-2 text-sm/8 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Terms of service</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy policy</a></li>
              <li><a href="#" className="hover:text-gray-900">License</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
