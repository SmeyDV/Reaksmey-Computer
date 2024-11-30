import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-4">
        <div className="container mx-auto px-4">
          <div className="justify-between items-center">
            {/* Logo and About Section */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl font-bold text-white">YourBrand</h2>
              <p className="mt-2 text-sm">
                YourBrand is your go-to store for premium products at
                competitive prices. Quality guaranteed.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 mt-6 pt-4 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} YourBrand. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
