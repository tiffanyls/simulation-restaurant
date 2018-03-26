import React from 'react';
import { Switch, Route } from 'react-router-dom';

import authview from './components/authview/authview';
import Browsingview from './components/browsingview/browsingview';

export default (
    <Switch>
        <Route exact path='/' component={authview} />
        <Route path='/browsingview' component={Browsingview} />
    </Switch>
);