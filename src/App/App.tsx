import React from 'react';
import './styles/app.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from './Pages/Homepage';
import { About } from './Pages/About';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
}

export default App;
