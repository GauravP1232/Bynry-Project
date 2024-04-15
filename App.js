// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileList from './components/ProfileList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ProfileList} />
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
