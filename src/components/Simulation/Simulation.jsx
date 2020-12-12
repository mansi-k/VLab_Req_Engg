import React, {Component} from 'react';
import { FilterLeft } from 'react-bootstrap-icons';
import {Switch, Route, withRouter } from 'react-router-dom'

import "./Simulation.css"
import SideNav from '../SideNav/SideNav';
import InputOutput from '../InputOutput/InputOutput';
import TestComponent from '../TestComponent/TestComponent';
import RequirementsContainer from '../RequirementsContainer/RequrementsContainer';
import UsersContainer from '../UsersContainer/UsersContainer';

class Simulation extends Component {
    constructor(props){
        super(props);
        let { path, url } = this.props.match;
        console.log(this.props)
        console.log("Route id", this.props.match.params.id)
        this.state = {
            displayNav: false,
            routes: [{
                type: "TaskRelation",
                path: `${url}/task-relation`,
                component: InputOutput
            },
            {
                type: "Requirements",
                path: `${url}/requirements`,
                component: RequirementsContainer
            },
            {
                type: "Users",
                path: `${url}/users`,
                component: UsersContainer
            },
            {
                type: "Case_study",
                path: `${url}/`,
                component: TestComponent
            }]
        }
        console.log(url);
    }


    showNav(){
        this.setState({displayNav: true})
    }

    collapseNav(){
        this.setState({displayNav: false})
    }

    render(){
        return (
            <div>
                <SideNav  displayNav={this.state.displayNav} onCollapse={this.collapseNav.bind(this)} basePath={this.props.match.url} caseStudy={this.props.match.params.id} />
                <div className="primary-pane">
                    <Switch>
                    {this.state.routes.map(route => {
                        console.log("Path is inside " + route.path)
                        return  <Route key={`route-${route.type}`} exact path={route.path} 
                        render={(props) => <route.component {...props} type={route.type} caseStudy={this.props.match.params.id}/> } />
                    })}
                    </Switch>
                </div>
                <div className={this.state.displayNav?"bottom-nav":"bottom-nav bottom-nav-show"}>
                    <FilterLeft color="white" size={40} onClick={this.showNav.bind(this)} cursor="pointer"/>
                </div>
            </div>

        );
    }
}

export default withRouter(Simulation);
