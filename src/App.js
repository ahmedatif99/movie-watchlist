import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/header.component";
import WatchList from "./pages/Watch-List/watch-list.component";
import Watched from "./pages/Watched/watched.component";
import Add from "./pages/Add/add.component";

import { GlobalProvider } from "./context/globalState";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
