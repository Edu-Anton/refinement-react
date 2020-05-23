import React from 'react';
import Home from './pages/Home'
import About from './pages/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route  path="/" component={Home}/>
      <Route  path="/about" component={About}/>
    </Switch>
  );
}

export default App;
