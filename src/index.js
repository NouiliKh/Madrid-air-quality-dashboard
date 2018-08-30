import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from "history";


const hist = createBrowserHistory();



ReactDOM.render(<BrowserRouter history={createBrowserHistory}>
    <React.Fragment>
        <App />
    </React.Fragment>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
