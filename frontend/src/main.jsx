import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import WorldMap from './components/WorldMap';
import StrainTypes from './components/StrainTypes';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <WorldMap />
      <StrainTypes />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
