import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import GoodBye from './GoodBye';
import Hello from './Hello';
import NavigationBar from './NavigationBar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavigationBar />
                    <Route path="/hello" component={Hello} />
                    <Route path="/goodbye" component={GoodBye} />
                </div>
            </Router>
        );
    }
}

export default App;
