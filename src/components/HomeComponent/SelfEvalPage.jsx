import React, { Component } from 'react';
import './HomeComponent.css';
import NavBar from './Navbar';
import QuizComponent from '../QuizComponent/QuizComponent'


class ReferencesPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <NavBar/>
            <section id="blog" className="blog quiz">
                <QuizComponent/>
            </section>
            </div>
        );
    }
}

export default ReferencesPage;