import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to="/hello">Hello</Link>
                </li>
                <li>
                    <Link to="/goodbye">GoodBye</Link>
                </li>
            </ul>
        );
    }
}

export default NavigationBar