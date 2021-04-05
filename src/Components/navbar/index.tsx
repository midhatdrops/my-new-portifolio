import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fs-5" href="#">
          Bruno R.N
        </a>
        <div className="navbar-nav">
          <a
            className="navbar-link link-light text-decoration-none mb-2"
            href="#"
          >
            Homepage
          </a>
          <a
            className="navbar-link link-light text-decoration-none mb-2"
            href="#/about"
          >
            About
          </a>
          <a
            className="navbar-link link-light text-decoration-none mb-2"
            href="https://github.com/midhatdrops"
            target="__blank"
            referrerPolicy="no-referrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
