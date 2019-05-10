import React, { Component } from 'react';

import HelloWorldText from './HelloWorldText.jsx';

class Hello extends Component {
    render() {
        return (<HelloWorldText name="Martin" />);
    }
}

export default Hello;