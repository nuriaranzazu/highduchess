import React, { useEffect } from 'react';

const WorldMap = () => {
  useEffect(() => {
    // We'll initialize the 3D map when the component mounts
    // This requires the Three.js and OrbitControls scripts to be loaded
    const initMap = async () => {
      try {
        if (typeof window.initializeWorldMap === 'function') {
          window.initializeWorldMap();
        } else {
          console.error('initializeWorldMap function not available');
        }
      } catch (error) {
        console.error('Error initializing world map:', error);
      }
    };

    // Small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      initMap();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="mapa-mundial" className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Mapa Mundial de Cepas de Cannabis</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">Explora el origen geográfico de las principales cepas de cannabis. Gira el globo e interactúa con las regiones para descubrir las variedades nativas de cada zona.</p>
        
        <div className="relative">
          <div id="world-map-3d" className="mx-auto shadow-xl"></div>
          <div className="absolute top-4 right-4 bg-dark bg-opacity-70 p-3 rounded text-sm">
            <p><i className="fas fa-mouse-pointer mr-1"></i> Arrastra para girar</p>
            <p><i className="fas fa-search-plus mr-1"></i> Rueda del ratón para zoom</p>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold text-accent mb-2">Asia Central</h3>
            <p className="text-sm">Región de origen del cannabis, con variedades índicas robustas y de alta concentración de CBD.</p>
          </div>
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold text-accent mb-2">América Latina</h3>
            <p className="text-sm">Hogar de sativas de crecimiento alto y efectos energizantes, como la famosa Acapulco Gold.</p>
          </div>
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold text-accent mb-2">África</h3>
            <p className="text-sm">Ofrece cepas como Durban Poison, conocidas por sus efectos creativos y eufóricos.</p>
          </div>
          <div className="bg-primary bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold text-accent mb-2">Europa/Norteamérica</h3>
            <p className="text-sm">Centros de creación de híbridos modernos, combinando genéticas de todo el mundo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
