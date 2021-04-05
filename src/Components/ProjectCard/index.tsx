import React from 'react';

interface ProjectCard {
  name: string;
  img: string;
  alt: string;
}

export const ProjectCard: React.FC<ProjectCard> = ({
  name,
  img,
  alt,
  ...props
}) => {
  return (
    <div className="row mt-4 d-flex align-items-center">
      <div className="col-xs-12 ">
        <div className="card d-flex align-items-center justify-content-center">
          <div className="card-header">
            <img src="" alt="" className="img-card-top"></img>
          </div>
          <div className="card-body ">
            <a href="#/project" className="text-light text-decoration-none">
              <button className="btn btn-primary">Project Name</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
