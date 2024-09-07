"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../utils/useAuth";
import Spinner from "./Spinner";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};

export default function Header() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  return (
    <header className="bg-red-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Sentiment X"
            width={50}
            height={50}
          />
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Sentiment X
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-800 hover:text-gray-900"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("instructions")}
            className="text-gray-800 hover:text-gray-900"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-800 hover:text-gray-900"
          >
            Pricing
          </button>
        </nav>

        {!user ? (
          <div className="space-x-4">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-gray-600 border border-red-300 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 transition duration-300 text-white rounded-md"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="space-x-4">
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-red-600 hover:bg-red-700 transition duration-300 text-white rounded-md"
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
