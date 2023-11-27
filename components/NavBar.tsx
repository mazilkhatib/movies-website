"use client"
import React, { useState } from 'react';
// import the icons from the library
import { MenuIcon, XIcon } from '@heroicons/react/outline';

interface NavbarProps {
  // add any props here if needed
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="/">
                <img
                    className="w-auto h-6 sm:h-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                    alt=""
                />
              </a>

              <div className="flex lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                >
                  <MenuIcon
                      className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                      aria-hidden="true"
                  />
                  <XIcon
                      className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                      aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <div
                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                    isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
                }`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a
                    href="#"
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Drama
                </a>
                <a
                    href="#"
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Comedy
                </a>
                <a
                    href="#"
                    className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Horror
                </a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0">
                <button
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-200 rounded">
                    <img
                        src="/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
                        className="object-cover w-full h-full"
                        alt="avatar"
                    />
                  </div>

                  <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                    Mazil Khatib
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
