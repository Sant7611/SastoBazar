import React from "react";
// import PlayStore from "../../assets/images/playstore.png"
// import AppStore from "../../assets/images/appstore.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="font-poppins bg-purple-200 text-gray-200 mt-4">
        <div className="container mx-auto py-14 px-6">
          <div className="flex gap-4 justify-evenly">
            <div className="max-w-96">
              <a href="#">
                <img
                  src="../../src/assets/images/logo.png"
                  alt=""
                  className="h-12"
                />
              </a>
              <p className="mt-6 text-gray-600">
                temporibus dicta quae iusto necessitatibus? Eius adipisci
                perferendis
              </p>
            </div>

            <div className="flex gap-8">
              <div>
                <h5 className="font-bold text-purple-900 mb-3">
                  Product Categories
                </h5>
                <ul>
                  <Link to="/home" className="text-gray-500 hover:text-yellow-400">
                    <li>Home</li>
                  </Link>

                  <Link to="/aboutus" className="text-gray-500 hover:text-yellow-400">
                    <li>Services</li>
                  </Link>
                  <Link to="/about-us" className="text-gray-500 hover:text-yellow-400">
                    <li>About Us</li>
                  </Link>
                </ul>
              </div>
              <div className="">
                <h5 className="font-bold text-purple-900 mb-3">
                  Top Categories
                </h5>
                <ul>
                  <li>
                    <a href="#" className="text-gray-500">
                      Mens Boot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500">
                      Womens Boot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500">
                      Womens Boot
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <h5 className="font-bold text-purple-900 mb-3">
                  Top Categories
                </h5>
                <ul>
                  <li>
                    <a href="#" className="text-gray-500">
                      Mens Boot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500">
                      Womens Boot
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-500">
                      Womens Boot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
