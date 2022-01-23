import React, { ReactElement } from 'react';
import Home from './pages/Home'
import EditProfile from './pages/EditProfile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





import './App.css';
import { useObserver } from 'mobx-react';


function App(): JSX.Element{

  

  return useObserver( () => (
    
    <>
    
      <Router>
       <Switch>
          <Route path="/sobre">
            <Home />
          </Route>
          <Route path="/users/:id">
            <EditProfile/>
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
