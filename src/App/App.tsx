import React from 'react';
import './styles/app.css';
import { Navbar } from '../Components/navbar';
import { Card } from '../Components/ProjectCard/card';
import { Footer } from '../Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-center">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
