"use client";

import Navigation from "../components/Navigation";
import Breadcrumbs from "../components/Breadcrumbs";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Dashboard({ currentPage = "Home" }) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white">
          <Navigation />
        </aside>

        <main className="flex-grow bg-white py-6">
          <Breadcrumbs currentPage={currentPage} />
          <div className="container mx-auto px-6">
            <span>Hello</span>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
