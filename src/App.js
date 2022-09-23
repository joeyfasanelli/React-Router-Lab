import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Stock from './components/Stock';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Stocks from './components/stock-data';

function App() {
  return(
    <div>
      <Nav/>
      <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>

        <Route path='/about'>
          <About/>
        </Route>

        <Route path="/stocks/:symbol"
      render={(routerProps) => <Stock stocks={Stocks} {...routerProps} />}
        />

        <Route path='/stocks'>
          <Dashboard/>
        </Route>

      </Switch>
    </div>
  )
}

export default App;

