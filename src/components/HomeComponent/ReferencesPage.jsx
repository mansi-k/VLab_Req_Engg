import React, { Component } from 'react';
import './HomeComponent.css';
import NavBar from './Navbar';


class ReferencesPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <NavBar/>
            <section id="blog" className="blog">
            <div className="container">
            <div className="row">
            <div className="entries">
                <article className="entry entry-single" data-aos="fade-up">
                <h2 className="entry-title">
                    References for Requirements Engineering
                </h2>
                <div className="entry-content">
                    <p>
                    Following books and websites have been consulted for this experiment. You are suggested to go through them for further details.
                    </p>
                    <h3>Bibliography</h3>
                    <p>
                    <ol>
                        <li>Requirements Engineering: A Good Practice Guide, Ian Sommerville, Pete Sawyer, Wiley India Pvt Ltd, 2009</li>
                        <li>Fundamentals of Software Engineering, Rajib Mall, Prentice-Hall of India, 3rd Edition, 2009</li>
                        <li>Applying UML patterns, Craig Larman</li>
                    </ol>
                    </p>
                    <h3>Webliography</h3>
                    <p>
                    <ol>
                        <li><a target="_blank" href="http://vlabs.iitkgp.ernet.in/se/1/">IIT K - Requirement Engineering Vlab</a></li>
                        <li><a href="https://www.processimpact.com/articles/telepathy.pdf" target="_blank">When Telepathy Won’t Do: Requirements Engineering Key Practices</a></li>
                        <li><a target="_blank" href="https://www.outsource2india.com/software/RequirementAnalysis.asp">Requirements Analysis: Process of requirements gathering and requirement definition</a></li>
                        <li><a target="_blank" href="https://ieeexplore.ieee.org/document/720574/;jsessionid=pzPUpx1fftxqmhFVwHJLZLhOqZiABZ_X8wje92GgEX4rMISDkpBq!-1920138161">IEEE Recommended Practice for Software Requirements Specifications</a></li>
                        <li><a target="_blank" href="http://www.jiludwig.com/reiber/requirements_trace.html">Requirements Trace-ability and Use Cases</a></li>
                    </ol>
                    </p>
                </div>
                </article>
                </div>
                </div>
            </div>
            </section>
            </div>
        );
    }
}

export default ReferencesPage;