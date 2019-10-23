import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Homepage from './Components/Homepage.component';
import ShopPage from './Pages/ShopPage';
import Header from './Components/header/Header.component';

function App() {
  return(
    <div>
      <Header />
    <div class="main">
      <Switch>
      <Route exact path = '/' component = {Homepage}/>
      <Route path = '/shop' component = {ShopPage} />
      </Switch>
    </div>
    </div>
  )
}


export default App;
