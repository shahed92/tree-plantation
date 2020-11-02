import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


import Navber from './component/Navber';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Notfound from './component/Notfound';
import TreeRemoval from './component/TreeRemoval';
import Emergency from './component/Emergency';
import TreeServics from './component/TreeService';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Router>
        <Navber />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/treeremoval" component={TreeRemoval} />
          <Route exact path="/emergency" component={Emergency} />
          <Route exact path="/contact" component={Contact} />
          <Route  component={TreeServics} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
