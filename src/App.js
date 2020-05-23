import React from 'react';
import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/services" component={Services}/>
      <Route  path="/gallery" component={Gallery}/>
    </Switch>
  );
}

export default App;
