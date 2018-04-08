import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header></header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={Page404} />
            </Switch>
            <footer>
                <div className='credits'>
                    Arrow Up/Down by Design Effectz from the Noun Project
            </div>
            </footer>
        </div>
    </BrowserRouter>
);

export default AppRouter;