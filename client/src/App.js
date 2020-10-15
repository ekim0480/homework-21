import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Header from './components/Header'


function App() {
  return (
    <Router>
      <Nav />
      <Header />
      
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
      </Switch>

    </Router>
  );
}


export default App;
