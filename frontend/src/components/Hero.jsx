import React from 'react';

const Hero = () => {
  return (
    <section className="cosmic-bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Explorando el Mundo del Cannabis</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">Una biblioteca integral sobre cepas de cannabis a nivel mundial, sus propiedades, efectos y usos responsables.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#mapa-mundial" className="btn-primary px-6 py-3 rounded-full font-medium">Explorar Mapa 3D</a>
          <a href="#high-duchess" className="btn-secondary px-6 py-3 rounded-full font-medium">The High Duchess</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
