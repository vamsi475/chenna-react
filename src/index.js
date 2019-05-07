import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router>
    <App />
</Router>, document.getElementById('root'));


serviceWorker.unregister();
