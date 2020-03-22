import * as React from 'react';
import { Component } from 'react';
import {CSSProperties} from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={footer}>
                <h1>Thank you for visiting! Please come again!</h1>
            </div>
        )
    }
}

const footer: CSSProperties = {
    height: '8rem',
    backgroundColor: '#3789c5',
    border: "4px solid white",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}