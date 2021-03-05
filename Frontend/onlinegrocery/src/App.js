import logo from "./logo.svg";
import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { PlaceOrderComponent } from "./components/PlaceOrderComponent";
import { Ordersummary } from "./components/Ordersummary";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Switch>
        <Route path="/order-summary">
          <Ordersummary />
        </Route>
        <Route path="/place-order">
          <PlaceOrderComponent />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
