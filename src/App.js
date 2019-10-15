import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import Homepage from './Components/Homepage.component';

function App() {
  return(
    <div>
      <Switch>
      <Route exact path = '/' component = {Homepage}/>
      <Route path = '/hats' component = {Hats} />
      </Switch>
    </div>
  )
}

const Hats = ()=>(
    <h1>Hats Page</h1>
  );


export default App;
