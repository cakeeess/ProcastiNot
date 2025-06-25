import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div className="pt-20">
  
    <nav className="w-full fixed top-0 left-0 z-50 bg-white bg-opacity-60 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center rounded-xl">
        <h1
          className="text-4xl bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent animate-pulse"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          ProcastiNot 🚀
        </h1>
        <div className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent space-x-4">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link to="/benefits" className="hover:text-blue-500 transition-colors">Benefits</Link>
        </div>
      </div>
    </nav>
   
</div>
  );
};

export default Navbar;
