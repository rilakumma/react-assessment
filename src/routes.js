import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EditMode from './components/EditMode/EditMode';
import Tasks from './components/Tasks/Tasks';

export default(
    <Switch>
        <Route path='/editmode/:id' component={EditMode} />
        <Route path='/' component={Tasks} />
    </Switch>
)