import React, { Component } from 'react';
import './HomeComponent.css';
import NavBar from './Navbar';


class IntroComponent extends Component {
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
                    Introduction to Requirements Engineering
                </h2>
                <div className="entry-content">
                    <h3>What are Requirements?</h3>
                    <p>
                    Sommerville defines "requirement" as a specification of what should be implemented. Requirements specify how the target system should behave.
                    The software requirements are description of features and functionalities of the target system. Requirements convey the expectations of users from the software product. 
                    The requirements can be obvious or hidden, known or unknown, expected or unexpected from client's point of view.
                    </p>
                    <h3>What is Requirements Engineeering?</h3>
                    <p>
                    Requirements identification is the first step of any software development project. Requirement Engineering is the process of defining, documenting and maintaining the requirements. It is a process of gathering and defining service provided by the system.
                    Until the requirements of a client have been clearly identified, and verified, no other task (design, coding, testing) could begin. Usually business analysts having domain knowledge on the subject matter discuss with clients and decide what features are to be implemented.
                    </p>
                    <h3>Why is Requirements Engineering important?</h3>
                    <p>
                    All plan-driven life cycle models prescribe that before starting to develop a
                    software, the exact requirements of the customer must be understood and
                    documented. In the past, many projects have suffered because the
                    developers started to implement something without determining whether
                    they were building what the customers exactly wanted. Starting development
                    work without properly understanding and documenting the requirements
                    increases the number of iterative changes in the later life cycle phases, and
                    thereby alarmingly pushes up the development costs. This also sets the
                    ground for customer dissatisfaction and bitter customer-developer disputes
                    and protracted legal battles. 
                    </p>
                    <p>
                    For any type of software development project, availability of a good quality
                    requirements document has been acknowledged to be a key factor in the
                    successful completion of the project. A good requirements document not only
                    helps to form a clear understanding of various features required from the
                    software, but also serves as the basis for various activities carried out during
                    later life cycle phases. When software is developed in a contract mode for
                    some other organisation (that is, an outsourced project), the crucial role
                    played by documentation of the precise requirements cannot be overstated. Therefore, for all types of
                    software development projects, proper formulation of requirements and their
                    effective documentation is vital. 
                    </p>
                    <p>
                    The requirements analysis and specification phase starts after the feasibility study stage is complete and the project has been found to be financially viable and technically feasible.
                    The SRS document is the final outcome of the requirements analysis and specification phase.
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

export default IntroComponent;