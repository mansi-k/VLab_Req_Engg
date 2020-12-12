import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <header id="header">
            <div className="container d-flex">
                <div className="logo mr-auto">
                    <h1 className="text-light"><a href="index.html">SE-VLab</a></h1>
                </div>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/theory">Theory</Link></li>
                    <li><Link to="/practice">Simulation</Link></li>
                    <li><Link to="/quiz">Self-evaluation</Link></li>
                    <li><Link to="/references">References</Link></li>
                    </ul>
                </nav>
            </div>
            </header>
        );
    }
}
 
export default NavBar;