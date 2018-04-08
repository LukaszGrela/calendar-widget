import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';

import './styles/application.scss';

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app'));