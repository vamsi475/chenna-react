import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Containers/Auth/Login';
import Registration from './Containers/Auth/Registration';
import Dashboard from './Containers/Dashboard';

function App() {
  let user = localStorage.getItem("currentUser");
  let routes = (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Redirect to="/" />
    </Switch>
  );
  if (user) {
    routes = (<Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Redirect to="/" />
    </Switch>)
  }
  return (
    <React.Fragment>{routes}</React.Fragment>
  );
}

export default App;
