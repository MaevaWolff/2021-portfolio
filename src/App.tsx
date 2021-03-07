import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

// import Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/work/:id" component={WorkPage} />
      </Switch>
    </Router>
  );
}

export default App;
