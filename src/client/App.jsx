import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route,Switch} from "react-router-dom";
//import {browserHistory} from 'react-router/node_modules/history/createBrowserHistory' ;
import Login from './Login.jsx';
import Access from './Access.jsx';
import Home from './Home.jsx';
//var ReactRouter = require('react-router');
//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <Switch>

          <Route  path="/hello" component={App} />
          <Route  path="/access" component={Access} />
          <Route  path="/home" component={Home} />
          <Route  path="/" component={Login} />


    </Switch>
    </BrowserRouter>

     )
  }
}
ReactDOM.render(
<App/>
  ,document.getElementById('app'));
