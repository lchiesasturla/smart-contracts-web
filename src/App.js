import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContractList from './pages/contracts/ContractList';
import Topbar from "./components/layout/Topbar";
import ContractCreation from "./pages/contracts/ContractCreation";

function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path="/">
          <ContractList />
        </Route>
        <Route path="/contracts/new">
          <ContractCreation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
