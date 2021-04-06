import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className=" mt-2 d-flex flex-md-grow-1 align-items-center justify-content-center justify-content-lg-between fs-5 ms-4">
        <Link
          to=""
          className="navbar-link link-light text-decoration-none mb-2 me-4"
        >
          Homepage
        </Link>
        <Link
          className="navbar-link link-light text-decoration-none mb-2 me-4"
          to="/about"
        >
          About
        </Link>
        <a
          className="navbar-link link-light text-decoration-none mb-2 me-5"
          href="https://github.com/midhatdrops"
          target="__blank"
          referrerPolicy="no-referrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};
