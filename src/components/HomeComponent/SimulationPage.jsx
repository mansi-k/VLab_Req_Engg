import React, { Component } from 'react';
import './SimulationPage.css';
import { BookHalf, Trash, Trash2Fill, MinecartLoaded } from 'react-bootstrap-icons'
import NavBar from './Navbar';
import {Link} from 'react-router-dom';

class SimulationPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <NavBar/>
            <section id="services" class="services">
            <center>
            <div class="container">
                <div class="section-title" data-aos="fade-up">
                    <br/>
                <h2>Case Studies</h2>
                </div>
                    <div class="icon-box" data-aos="fade-up">
                    <div class="icon"><BookHalf size={25}/></div>
                    <h4 class="title"><Link to="/simulation/library_management">Library Management System</Link></h4>
                    <p class="description">Identify the actors and use cases for Library Management System</p>
                    </div>
                    <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="icon"><MinecartLoaded size={25}/></div>
                    <h4 class="title"><Link to="/simulation/waste_management">Waste Management Inspection System</Link></h4>
                    <p class="description">Identify the actors and use cases for Waste Management Inspection System</p>
                    </div>
                </div>
            </center>
          </section>
          </div>
        );
    }
}
 
export default SimulationPage;