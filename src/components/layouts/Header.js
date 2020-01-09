import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>React Parcel</h1>
            </header>
        );
    }
}

const headerStyle = {
    padding: '10px',
    textAlign: 'center',
    background: '#333',
    color: '#fff'
}

export default Header;