import React, { Component } from 'react'

class Header extends Component {
  
  render() {
      var styles = {
            textAlign: 'center',
            fontWeight:'bold',
            backgroundColor: '#f5f5f5'
        };
    return (
      <header className="container-fluid" style={styles}>
          <h1 >Directory Structure Implemenation</h1>
      </header>
    )
  }
}

export default Header
