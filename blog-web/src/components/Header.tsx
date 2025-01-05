import React from 'react'
import Link from 'next/link'
import { FaBookBookmark } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

function header() {
  return (
    <>
    <header className="text-gray-600 body-font">
  <div className="container mxauto flex justify-between -ml-4 flex-wrap p-5 flexcol flexrow items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
      <span className="ml-3 text-xl font-mono">TechSphere</span>
    </a>
    <nav className="md:ml-auto ml-6 flex flex-wrap items-center text-xl md:text-2xl gap-6 justify-center font-semibold ">
      <Link href='/'>
      <FaBookBookmark />
      </Link>
      <Link href='/signup'>
      <VscAccount />
      </Link>
    </nav>
  </div>
</header>

    </>
  )
}

export default header