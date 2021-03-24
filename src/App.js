import "./App.css";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/" component={SearchPage}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
