import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Streams from './components/Streams';
import { Games } from './components/Games';

function App() {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/" component={Games}></Route>
      <Route exact path="/top-streams" component={Streams}></Route>
    </Router>
  );
}

export default App;
