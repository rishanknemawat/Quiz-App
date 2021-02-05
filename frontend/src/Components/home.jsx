import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() { 
        return ( 
            <div>
                <Link to='/createtest'><button>Create-Test</button></Link>
                <Link to='/game/test/123'><button>Play Game</button></Link>
            </div>
         );
    }
}
 
export default Home;