import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/js/all";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import ParamEdad from "./pages/ParamEdad";
import Anio from "./pages/Anio";
import Destreza from "./pages/Destreza";
import Axios from "axios";

Axios.interceptors.request.use(function (config) {
  config.url = `${process.env.REACT_APP_API_BASE_URL}${config.url}`;
  return config;
});

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clientes" component={Clientes} />
        <Route exact path="/paramedad" component={ParamEdad} />
        <Route exact path="/anios" component={Anio} />
        <Route exact path="/destreza" component={Destreza} />
      </Switch>
    </Router>
  );
}

export default App;
