import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";

// import pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <AnimateSharedLayout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/work/:id" component={WorkPage} />
        </Switch>
      </Router>
    </AnimateSharedLayout>
  );
}

export default App;
