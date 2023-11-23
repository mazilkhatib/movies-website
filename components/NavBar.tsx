"use client"
import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#pablo"
              >
                Movies App
              </a>
              <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
            <div
                className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                  >
                    <span className="ml-2">New</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                  >
                    <span className="ml-2">Drama</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                  >
                  <span className="ml-2">Horror</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
  );
}
