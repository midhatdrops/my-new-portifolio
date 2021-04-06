import React from 'react';

interface Card {
  img: string;
  alt: string;
  name: string;
}

export const Card: React.FC<Card> = ({ img, alt, name }) => {
  return (
    <div className="card d-flex align-items-center justify-content-center col-xs-12 col-sm-6 col-md-4 col-md-4 col-lg-3 mt-4 me-2">
      <div className="card-header">
        <img src={img} alt={alt} className="img-card-top"></img>
      </div>
      <div className="card-body ">
        <a href="#/project" className="text-light text-decoration-none">
          <button className="btn btn-primary">{name}</button>
        </a>
      </div>
    </div>
  );
};
