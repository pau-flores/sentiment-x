"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaCreditCard, FaWallet } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdSettings } from "react-icons/md";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navigationLinks = [
    { name: "Home", href: "/dashboard", icon: <FaHome /> },
    { name: "Assets", href: "/dashboard/assets", icon: <FaCreditCard /> },
    {
      name: "Sentiment Analysis",
      href: "/dashboard/sentiment",
      icon: <IoMdAnalytics />,
    },
    { name: "Support", href: "/dashboard/support", icon: <BiSupport /> },
    { name: "Settings", href: "/dashboard/settings", icon: <MdSettings /> },
  ];

  return (
    <nav className="flex flex-col h-full">
      <div className="p-6 my-4 text-white font-semibold text-xl">
        <Link href="/">Sentiment X</Link>
      </div>
      <div className="flex-grow">
        {navigationLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`py-4 px-6 flex items-center hover:bg-gray-700 ${
              activeLink === link.name ? "text-red-500" : "text-white"
            }`}
            onClick={() => handleLinkClick(link.name)}
          >
            <span className="mr-3">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="p-4">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Guide
        </button>
      </div>
    </nav>
  );
}
