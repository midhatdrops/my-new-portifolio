import React from 'react';
import { Footer } from '../../Components/footer';
import { Navbar } from '../../Components/navbar';
import { Card } from '../../Components/ProjectCard/card';

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="App ">
        <div className="container ">
          <div className="row d-flex align-items-center justify-content-between">
            <Card name="Project Name" alt="" img="" />
            <Card name="Project Name" alt="" img="" />
            <Card name="Project Name" alt="" img="" />
            <Card name="Project Name" alt="" img="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
