import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work/:id" component={WorkPage} />
      </Switch>
    </Router>
  );
}

export default App;
