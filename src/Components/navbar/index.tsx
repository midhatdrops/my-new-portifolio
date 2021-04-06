import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
      {/* <a className="navbar-brand " href="#">
          Bruno R.N /
        </a> */}
      <div className=" mt-2 d-flex flex-md-grow-1 align-items-center justify-content-center justify-content-lg-between fs-5 ms-4">
        <a
          className="navbar-link link-light text-decoration-none mb-2 me-4"
          href="#"
        >
          Homepage
        </a>
        <a
          className="navbar-link link-light text-decoration-none mb-2 me-4"
          href="#/about"
        >
          About
        </a>
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
