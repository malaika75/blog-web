import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/4 md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                className="w-10 h-10 text-white p-2 bg-blue-950 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">TechSphere</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Stay Geeky, Stay Ahead with TechSphere!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-grow flex flex-wrap md:pl-20 md:text-left text-center">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Links
              </h2>
              <ul className="list-none mb-4">
                <Link href="/">
                  <li className="hover:text-purple-800 hover:underline cursor-pointer">
                    Blog
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="hover:text-purple-800 hover:underline cursor-pointer">
                    Contact
                  </li>
                </Link>
                <Link href="/about">
                  <li className="hover:text-purple-800 hover:underline cursor-pointer">
                    About
                  </li>
                </Link>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <ul className="list-none mb-4">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">FAQs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="w-full lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Subscribe
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              We’d love to hear from you!
            </h3>
            <p className="mb-4">
              Share your thoughts and tell us what kind of content you’d like to
              see.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Feedback"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 mb-4 md:mb-0"
              />
              <button className="ml-4 inline-flex text-white bg-blue-950 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Social and Copyright Section */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
            <p className="text-gray-800 text-sm text-center sm:text-left font-semibold">
              © 2024 TechSphere — @malaika57680@gmail.com
            </p>
            <div className="flex justify-center sm:justify-start">
              <a className="text-gray-500 ml-3">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="text-gray-500 ml-3">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="text-gray-500 ml-3">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
