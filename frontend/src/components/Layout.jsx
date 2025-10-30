import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// This component wraps every page, providing the consistent Header and Footer
export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white">
      <Header />
      <main className="flex-grow">
        {/* The Outlet renders the current route's component (e.g., Home, About) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

