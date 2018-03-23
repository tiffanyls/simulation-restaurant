import React from 'react';
import { Switch, Route } from 'react-router-dom';

import authview from './components/authview/authview';
import browsingview from './components/browsingview/browsingview';

export default (
    <Switch>
        <Route exact path='/' component={authview} />
        <Route path='/browsingview' component={browsingview} />
    </Switch>
);