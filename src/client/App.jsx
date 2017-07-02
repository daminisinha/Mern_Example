import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route ,IndexRoute ,hashHistory} from "react-router-dom";
import Login from './Login.jsx';
import Access from './Access.jsx';
import Home from './Home.jsx';


export default class App extends React.Component{
  render(){
    return(
      <Login />
    )
  }
}
ReactDOM.render(
<Router history={hashHistory}>
<div>
<Route path="/" component={App} />
<Route path="/access" component={Access} />
<Route path="/home" component={Home} />
</div>
</Router>
  ,document.getElementById('app'));
