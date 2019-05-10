import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hello from './Hello.jsx';
import GoodBye from './GoodBye.jsx';
import NavigationBar from './NavigationBar.jsx';


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
