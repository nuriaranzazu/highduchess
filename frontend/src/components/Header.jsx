import React, { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-cannabis text-accent text-3xl mr-3"></i>
            <h1 className="text-xl font-bold">Mundo<span className="text-accent">Cannabis</span></h1>
          </div>
          <nav className={`md:flex space-y-4 md:space-y-0 md:space-x-6 ${mobileMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-dark p-4' : 'hidden'}`}>
            <a href="#mapa-mundial" className="hover:text-accent transition">Mapa 3D</a>
            <a href="#tipos-cepas" className="hover:text-accent transition">Tipos de Cepas</a>
            <a href="#cepas-populares" className="hover:text-accent transition">Cepas Populares</a>
            <a href="#cepas-mexicanas" className="hover:text-accent transition">Cepas Mexicanas</a>
            <a href="#compuestos" className="hover:text-accent transition">Compuestos</a>
            <a href="#terpenos" className="hover:text-accent transition">Terpenos</a>
            <a href="#high-duchess" className="hover:text-accent transition">The High Duchess</a>
          </nav>
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
