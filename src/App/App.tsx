import React from 'react';
import './styles/app.css';
import { Navbar } from '../Components/navbar';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
