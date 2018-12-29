import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, User } from './containers';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/user" component={User} />
  </Switch>
);

export default Routes;
