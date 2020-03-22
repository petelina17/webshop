import * as React from 'react';
import {Component, CSSProperties} from 'react';

export default class Login extends Component {
    render() {
        return (
            <div style={login}>
                <h1>Login form</h1>
            </div>
        )
    }
}

const login: CSSProperties = {
    height: '4rem',
    backgroundColor: '#dddddd'
}