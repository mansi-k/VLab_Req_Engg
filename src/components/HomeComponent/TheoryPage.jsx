/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import './HomeComponent.css';
import atmuc from '../data_files/atm_usecase.png';
import notation from '../data_files/notation.jpg';
import NavBar from './Navbar';

class TheoryComponent extends Component {
    state = {  }

    redirectToURL(event, link){
        event.preventDefault();
        window.open(link);
    }
    render() { 
        return ( 
            <div>
            <NavBar/>
            <section id="blog1" className="blog">
            <div className="container">
            <div className="row">
            <div className="entries">
                <article className="entry entry-single" data-aos="fade-up">
                <h2 className="entry-title">
                    Learning to Identify the Requirements from Problem Statements
                </h2>
                <div className="entry-content">
                    <blockquote>
                    <p>
                    The goal of the requirements analysis and specification phase is to clearly understand the customer requirements and to systematically organise the requirements into a document called the Software Requirements Specification (SRS) document
                    </p>
                    </blockquote>
                    <p>
                    In this tutorial we will learn how to identify functional and non-functional requirements from a given problem statement and how to model them with use case diagrams.
                    </p>
                    <h3>Characteristics of Requirements</h3>
                    <p>
                    Requirements gathered for any new system to be developed should exhibit the following three properties:
                    <ul>
                        <li>
                        <b>Unambiguity: </b> 
                        There should not be any ambiguity what a system to be developed should do. For example, consider you are developing a web application for your client. The client requires that enough number of people should be able to access the application simultaneously. What's the "enough number of people"? That could mean 10 to you, but, perhaps, 100 to the client. There's an ambiguity.
                        </li>
                        <li>
                        <b>Consistency: </b> 
                        To illustrate this, consider the automation of a nuclear plant. Suppose one of the clients say that it the radiation level inside the plant exceeds R1, all reactors should be shut down. However, another person from the client side suggests that the threshold radiation level should be R2. Thus, there is an inconsistency between the two end users regarding what they consider as threshold level of radiation.
                        </li>
                        <li>
                        <b>Completeness: </b>
                        A particular requirement for a system should specify what the system should do and also what it should not. For example, consider a software to be developed for ATM. If a customer enters an amount greater than the maximum permissible withdrawal amount, the ATM should display an error message, and it should not dispense any cash.
                        </li>
                    </ul>
                    </p>
                    <h3>Categorization of Requirements</h3>
                    <p>
                    Based on the target audience or subject matter, requirements can be classified into different types, as stated below:
                    <ul>
                        <li>
                            <b>User requirements: </b>
                            They are written in natural language so that both customers can verify their requirements have been correctly identified.
                        </li>
                        <li>
                            <b>System requirements: </b>
                            They are written involving technical terms and/or specifications, and are meant for the development or testing teams.
                        </li>
                    </ul>
                    </p>
                    <p>
                    Requirements can be classified into two groups based on what they describe:
                    <ul>
                        <li>
                            <b>Functional requirements (FRs): </b>
                            These describe the functionality of a system -- how a system should react to a particular set of inputs and what should be the corresponding output.
                            Functional requirements may involve calculations, technical details, data manipulation and processing, and other specific functionality that define what a system is supposed to accomplish. Behavioral requirements describe all the cases where the system uses the functional requirements, these are captured in use cases.
                        </li>
                        <li>
                            <b>Non-functional requirements (NFRs): </b>
                            They are not directly related what functionalities are expected from the system. However, NFRs could typically define how the system should behave under certain situations. 
                            They are also known as "quality requirements" which impose constraints on the design or implementation (such as performance requirements, security, or reliability).
                            For example, a NFR could say that the system should work with 128MB RAM. Under such condition, a NFR could be more critical than a FR.
                        </li>
                    </ul>
                    </p>
                    <h3>Identifying Functional Requirements</h3>
                    <p>
                    The high-level functional requirements often need to be identified either from informal problem description document or from a conceptual understanding of the problem. 
                    Each high-level requirement characterises a way of system usage (service invocation) by some user to perform some meaningful piece of work. 
                    Remember that there can be many types of users (stakeholders) of a system and their requirements from the system may be very different. 
                    So, it is often useful to first identify the different types of users who might use the system and then try to identify the different services expected from the software by different types of users
                    </p>
                    <h3>Example - ATM Machine System</h3>
                    <p>Some of the requrements of an ATM Machine System are as follows:</p>
                    <ul>
                        <li>The XYZ Bank Inc. can have many automated teller machines (ATMs), and the new software system shall provide functionality on all ATMs.</li>
                        <li>The system shall enable the customers of XYZ Bank Inc., who have valid ATM cards, to perform three types of transactions; 1) withdrawal of funds, 2) Query of account balance, and 3) transfer of funds from one bank account to another account in the same bank.</li>
                        <li>The system shall allow the customer to enter the correct PIN in no more three attempts. The system shall also display an apology to the customer.</li>
                        <li>The system shall ask for the transaction type after satisfactory validation of the customer PIN. The customer shall be given three options: withdrawal transaction, or query transaction, or transfer transaction.</li>
                        <li>If a customer selects query transaction, the system shall prompt the customer to enter account number.</li>
                        <li>If a query transaction is approved, the system shall print a receipt and eject the card. The information contained on the receipt includes transaction number, transaction type, and account balance</li>
                        <li>The system shall enable an ATM operator to add cash to the cash dispenser.</li>
                    </ul>
                    <h3>Video resources</h3>
                    <ul>
                        <li>
                            <a href="#" onClick={(e) => {
                                this.redirectToURL(e, "https://www.youtube.com/playlist?list=PLUgFMzuE8lQDeixpbP3s6EyQx8PiNdeQL")
                            }}>
                                Requirements Engineering - California State University
                            </a>
                        </li>
                    </ul>
                </div>
                </article>
                </div>
                </div>
            </div>
            </section>
            <section id="blog2" className="blog">
            <div className="container">
            <div className="row">
            <div className="entries">
                <article className="entry entry-single" data-aos="fade-up">
                <h2 className="entry-title">
                    Learning to model Use Cases
                </h2>
                <div className="entry-content">
                    <blockquote>
                    <p>
                    Use Case Diagrams belong to the category of behavioural diagram of UML diagrams. The goal of the Use Case Diagrams is to present a high-level graphical view of the system by identifying various functions of the system and how actors interact with them.
                    </p>
                    </blockquote>
                    <h3>Actors</h3>
                    <p>
                    An actor can be defined as an object or set of objects, external to the system, which interacts with the system to get some meaningful work done. Actors could be human, devices, or even other systems.
                    Actor plays a role in the business. It is similar to the concept of user, but a user can play different roles.
                    For example: A professor can be an instructor and also a researcher. Actor triggers use cases and has a responsibility toward the system (inputs), and also has expectations from the system (outputs).
                    </p>
                    <h3>Use Cases</h3>
                    <p>
                    A use case represents a function within the system which is the goal of an interaction between an actor and the system.  A use case is written as a series of interactions between the user and the system, similar to a call and response where the focus is on how the user will use the system.
                    Use cases just specify the intent and not the action or implementaion details. 
                    </p>
                    <h3>Association between Actors and Use Cases</h3>
                    <p>
                    A use case is triggered by an actor. Actors and use cases are connected through binary associations indicating that the two communicates through message passing.
                    An actor must be associated with at least one use case. Similarly, a given use case must be associated with at least one actor. Association among the actors are usually not shown. However, one can depict the class hierarchy among actors.
                    </p>
                    <h3>Use Case Relationships</h3>
                    <p>
                    Three types of relationships exist among use cases:
                    <ul>
                        <li>Include relationship</li>
                        <li>Extend relationships</li>
                        <li>Use case generalization</li>
                    </ul>
                    </p>
                    <h5>Include Relationship</h5>
                    <p>
                    Include relationships are used to depict common behaviour that are shared by multiple use cases. This could be considered analogous to writing functions in a program in order to avoid repetition of writing the same code. Such a function would be called from different points within the program.
                    </p>
                    <h5>Extend Relationship</h5>
                    <p>
                    Use case extensions are used used to depict any variation to an existing use case. Extend is used when a use case conditionally adds steps to another first class use case. They are used to the specify the changes required when any assumption made by the existing use case becomes false.
                    </p>
                    <h5>Generalization</h5>
                    <p>
                        Generalization relationship are used to represent the inheritance between use cases. A derived use case specializes some functionality it has already inherited from the base use case. The child use case is an enhancement of the parent use case.
                    </p>
                    <h3>Example - ATM Machine System</h3>
                    <div>
                        <img src={notation} />
                        <img src={atmuc} />
                    </div>
                    <h3>Video resources</h3>
                    <li>
                        <a href="#" onClick={(e) => {
                                    this.redirectToURL(e, "https://youtu.be/zid-MVo7M-E")
                                }}>
                                    UML Diagrams - Lucidchart
                        </a>
                    </li>
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
 
export default TheoryComponent;