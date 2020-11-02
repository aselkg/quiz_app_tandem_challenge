import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Instructions, Play, Footer } from "./components";

function App() {
  return (
    <div className="">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/instructions" exact component={() => <Instructions />} />
          <Route path="/play" exact component={() => <Play />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
