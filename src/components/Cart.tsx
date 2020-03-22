import * as React from 'react';
import {Component, CSSProperties} from 'react';

export default class Cart extends Component {
    render() {
        return (
            <div style={cart}>
                <h1>My cart</h1>
            </div>
        )
    }
}

const cart: CSSProperties = {
    height: '4rem',
    backgroundColor: '#dddddd'
}