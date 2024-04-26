import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import clsx from "clsx";

import CustomLink from "./CustomLink";
import { NAV_LINKS } from "@/utilities/constant";

import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-headerColor border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/doh-clicker-logo.svg"
            alt="Logo"
            width={50}
            height={50}
            className="ml-10"
          />
        </Link>
        <button
          type="button"
          onClick={toggleNav}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <Bars3Icon width={30} height={30} color="black" />
        </button>
        <div
          className={clsx("w-full", "md:block", "md:w-auto", {
            hidden: !isNavOpen,
          })}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded bg-gray-50 lg:bg-headerColor md:bg-headerColor md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {NAV_LINKS.map((link) => (
              <li
                key={link.title}
                className={`
                    block py-2 px-3rounded lg:rounded-none md:rounded-none 
                     hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-blue-400 ${
                       router.pathname === link.path
                         ? "lg:border-b  lg:border-red-500 md:border-b md:border-red-500 text-blue-700"
                         : " text-gray-900 "
                     }
                     md:p-0 `}
              >
                <CustomLink href={link.path} label={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
