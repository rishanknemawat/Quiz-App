import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return (
        <nav>
            <span className="navbar-brand mb-0 h4">Navbar{" "}</span>
            <Link to='/createtest'><button>Create-Quiz </button></Link>
            <Link to='/game/test/123'><button>Play Game</button></Link>
        </nav>
      );
    }
}
 
export default NavBar;