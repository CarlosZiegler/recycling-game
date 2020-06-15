import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../src/pages/Home'
import Game from '../src/pages/Game'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/game" exact component={Game} />
            </Switch>
        </BrowserRouter>
    )
}