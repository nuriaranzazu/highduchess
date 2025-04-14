import React from 'react';

const Introduction = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Conoce el Universo del Cannabis</h2>
            <p className="mb-4">El cannabis ha acompañado a la humanidad durante milenios, cultivado originalmente en Asia Central y posteriormente extendido a todas las regiones del planeta. Como resultado de su adaptación a diversos climas y de la selección genética a lo largo de los siglos, se han desarrollado cientos de variedades o "cepas" con propiedades únicas.</p>
            <p className="mb-4">En este portal educativo exploraremos las principales cepas a nivel mundial, sus orígenes, características y compuestos, con un enfoque especial en las variedades mexicanas que han tenido un impacto significativo en la cultura cannábica global.</p>
            <p className="font-medium">Esta plataforma busca proporcionar información científica y objetiva para promover un uso responsable y consciente.</p>
          </div>
          <div className="md:w-1/2">
            <div className="gradient-border">
              <div className="glass-card p-8 text-dark">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Objetivos Educativos</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span>Catalogar y visualizar las principales cepas de cannabis a nivel mundial</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span>Explicar de manera accesible los compuestos químicos y sus efectos</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span>Destacar el patrimonio cannábico mexicano y su influencia global</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span>Proporcionar información para un consumo consciente y responsable</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mt-1 mr-3"></i>
                    <span>Combatir estigmas mediante información basada en evidencia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
