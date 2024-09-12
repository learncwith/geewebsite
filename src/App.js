import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Services from './Services';
import Testimonial from './Testimonial';
import Footer from './Footer';
import './App.css'; // This file will include your CSS

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}
export default App;
