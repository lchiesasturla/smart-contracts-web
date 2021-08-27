import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RenantHome from './pages/RenantHome';
import RealEstateHome from './pages/RealEstateHome';
import LocatorHome from './pages/LocatorHome';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/renant">
            <RenantHome />
          </Route>
          <Route path="/real-estate">
            <RealEstateHome />
          </Route>
          <Route path="/locator">
            <LocatorHome />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
