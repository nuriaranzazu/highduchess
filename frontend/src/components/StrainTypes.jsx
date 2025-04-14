import React, { useEffect } from 'react';

const StrainTypes = () => {
  useEffect(() => {
    // Initialize charts when component mounts
    const initCharts = async () => {
      try {
        if (typeof window.initializeCharts === 'function') {
          window.initializeCharts();
        } else {
          console.error('initializeCharts function not available');
        }
      } catch (error) {
        console.error('Error initializing charts:', error);
      }
    };

    // Small delay to ensure DOM is fully loaded
    const timer = setTimeout(() => {
      initCharts();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="tipos-cepas" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Principales Tipos de Cannabis</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">El cannabis se clasifica tradicionalmente en tres tipos principales, cada uno con características y efectos distintivos.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="strain-card shadow-lg rounded-xl overflow-hidden">
            <div className="h-40 bg-primary flex items-center justify-center">
              <i className="fas fa-leaf text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">Índica</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Plantas bajas y compactas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Hojas anchas y oscuras</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Efectos relajantes y sedantes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Alta en CBD, ideal para dolor</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Origen: regiones montañosas de Asia</span>
                </li>
              </ul>
              <div className="canvas-container">
                <canvas id="indica-chart" height="150"></canvas>
              </div>
            </div>
          </div>
          
          <div className="strain-card shadow-lg rounded-xl overflow-hidden">
            <div className="h-40 bg-secondary flex items-center justify-center">
              <i className="fas fa-seedling text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-secondary">Sativa</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Plantas altas y delgadas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Hojas estrechas y claras</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Efectos energizantes y creativos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Alta en THC, ideal para día</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Origen: regiones ecuatoriales</span>
                </li>
              </ul>
              <div className="canvas-container">
                <canvas id="sativa-chart" height="150"></canvas>
              </div>
            </div>
          </div>
          
          <div className="strain-card shadow-lg rounded-xl overflow-hidden">
            <div className="h-40 bg-accent flex items-center justify-center">
              <i className="fas fa-cannabis text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-accent">Híbrida</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Combinación de índica y sativa</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Características variables</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Efectos balanceados</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Perfiles de cannabinoides diversos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-accent mt-1 mr-2"></i>
                  <span>Origen: cruces modernos</span>
                </li>
              </ul>
              <div className="canvas-container">
                <canvas id="hybrid-chart" height="150"></canvas>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-primary bg-opacity-10 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-dark">Nota Sobre la Clasificación</h3>
          <p>Si bien la clasificación tradicional en índica, sativa e híbrida es ampliamente utilizada, la ciencia moderna ha demostrado que los efectos del cannabis están determinados más por su perfil específico de cannabinoides y terpenos que por su taxonomía. Muchas cepas "puras" hoy en día contienen genética mezclada debido a años de cruces, por lo que los consumidores deben prestar atención a los perfiles químicos para encontrar los efectos deseados.</p>
        </div>
      </div>
    </section>
  );
};

export default StrainTypes;
