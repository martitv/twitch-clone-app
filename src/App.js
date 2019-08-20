import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Streams } from "./pages/Streams";
import { Games } from "./pages/Games";
import { GameStreams } from "./pages/GameStreams";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Games} />
      <Route exact path="/top-streams" component={Streams} />
      <Route exact path="/game/:id" component={GameStreams} />
    </Router>
  );
}

export default App;
