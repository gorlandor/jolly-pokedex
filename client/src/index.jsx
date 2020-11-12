import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';

ReactDOM.hydrate(
    <React.Fragment>
        <Router>
            <App />
        </Router>
    </React.Fragment>,
    document.getElementById('jolly-pokedex')
);
