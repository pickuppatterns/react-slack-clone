import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
