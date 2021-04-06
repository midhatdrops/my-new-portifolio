import React from 'react';

export const Card = () => {
  return (
    <div className="card d-flex align-items-center justify-content-center col-xs-12 col-sm-6 col-md-4 col-md-4 col-lg-3 me-4 mt-4">
      <div className="card-header">
        <img src="" alt="" className="img-card-top"></img>
      </div>
      <div className="card-body ">
        <a href="#/project" className="text-light text-decoration-none">
          <button className="btn btn-primary">Project Name</button>
        </a>
      </div>
    </div>
  );
};
