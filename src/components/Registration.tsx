import * as React from 'react';
import {Component, CSSProperties} from 'react';

export default class Registration extends Component {
    render() {
        return (
            <div style={registration}>
                <h1>Registration form</h1>
            </div>
        )
    }
}

const registration: CSSProperties = {
    height: '4rem',
    backgroundColor: '#dddddd'
}