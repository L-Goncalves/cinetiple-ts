import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { useObserver } from "mobx-react";
import SamplePack from "./pages/SamplePack";
import { NavbarWithSidebar } from "./components/NavHeader";
import SamplePackList from "./pages/SamplePackList";

function App(): JSX.Element {
  return useObserver(() => (
    <>
      <Router>
        <NavbarWithSidebar />
        <Switch>
          <Route path="/samplepack/:id">
            <SamplePack />
          </Route>
          <Route path="/samplepack">
            <SamplePackList />
          </Route>
          <Route path="/sobre">
            <Home />
          </Route>
          <Route path="/users/:id">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  ));
}

export default App;
