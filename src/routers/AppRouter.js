import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Page404 from '../pages/Page404';
import Home from '../pages/Home';
import moment from 'moment';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <header><h1>Calendar Widget</h1></header>
            <Switch>
                <Route exact path="(/|/index.html)" component={() => {
                    const now = moment();
                    return <Redirect to={`/${now.year()}/${now.month()}/${now.date()}`} />
                }} />
                <Route path="/:year?/:month?/:date?" component={Home} />
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