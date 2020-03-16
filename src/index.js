import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './Components/App';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import registerServiceWorker from './registerServiceWorker';
 import firebase from './firebase'

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

class Root extends React.Component {
   componentDidMount() {
       firebase.auth().onAuthStateChanged(user => {
           if (user) {
               console.log(user);
               this.props.history.push("/");
           }
       });
   }

    render() {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Switch>        
    );
   }
}

const RootWithAuth = withRouter(Root); 

ReactDOM.render(
<Router>
<RootWithAuth />
</Router>, document.getElementById("root"));
registerServiceWorker();
