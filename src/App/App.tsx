import React from 'react';
import './styles/app.css';
import { Navbar } from '../Components/navbar';
import { ProjectCard } from '../Components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container ">
        <ProjectCard name="" alt="" img="" />
      </div>
      <div className="navbar navbar-dark bg-dark fixed-bottom d-flex align-items-center justify-content-center">
        💓 Bruno Rezende Novais - 2020
      </div>
    </div>
  );
}

export default App;
