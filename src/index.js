import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './Redux/index.js';

import App from "./Components/App/App.jsx"

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);