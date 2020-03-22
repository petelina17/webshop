import * as React from 'react';
import {Component, CSSProperties} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'


export default class Navbar extends Component <{handleCart: () => void}> {
    render() {
        return (
            <div style={navbar}>
                <div style={cartIcon}>
                    <FontAwesomeIcon icon={faShoppingCart} onClick={() => this.props.handleCart()} />
                </div>
            </div>
        )
    }
}

const navbar: CSSProperties = {
    height: '4rem',
    backgroundColor: "#3789c5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid white",
    borderRadius: "12px",
}

const cartIcon: CSSProperties = {
    fontSize: '1.7rem',
    width: '1.7em',
    height: '1.7em',
    backgroundColor: '#e0e0e0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}