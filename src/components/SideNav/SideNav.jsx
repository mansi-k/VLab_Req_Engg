import React, {Component} from 'react';
import { ArrowLeft, HouseDoorFill } from 'react-bootstrap-icons';
import "./SideNav.css"
import { Link } from 'react-router-dom';

class SideNav extends Component {

    constructor(props){
        super(props)
        let {basePath, caseStudy} = this.props,
            caseStudyTypes = {
                "library_management": [{
                    name: "Reissue Book",
                    link: "reissue_book"
                },{
                    name: "Search Book",
                    link: "search_book"
                }],
                "waste_management": [{
                    name: "Print Checklist",
                    link: "print_checklist"
                },{
                    name: "Generate Letter",
                    link: "generate_letter"
                }]
            }
        this.state = {
            navContents: [{
                title: "Home",
                link: `${basePath}`
            },{
                title: "Stakeholders",
                link: `${basePath}/users`
            },{
                title: "Requirements",
                link: `${basePath}/requirements`
            },{
                title: "Use Case",
                subLinks: caseStudyTypes[caseStudy].map(type => {
                    return {
                        name: type.name,
                        link: `${basePath}/task-relation?type=${type.link}`
                    }
                })
            }]
        }
    }

    render(){
        return (<div className={this.props.displayNav?"nav-container nav-container-show":"nav-container"}>
            <div className="cross-space">
                <Link to="/practice"><HouseDoorFill color="white" size={36} onClick={this.props.onCollapse}/></Link>
                <ArrowLeft color="white" size={48} onClick={this.props.onCollapse}/>

            </div>
            <div className="title">
                <h3>Simulation</h3>
            </div>
            <div className="contents">
                <h6>Exercises</h6>
                <ul>
                    {this.state.navContents.map((navContent, index) => {
                        if ("subLinks" in navContent){
                            return (<li>{navContent.title}<ul>{navContent["subLinks"].map((link, index2) => {
                                return (
                                    <li key={"sublink_" + index2}><Link to={`${link.link}`} onClick={this.props.onCollapse}>{link.name}</Link></li>
                                )
                            })}</ul></li>)
                        }
                        return (<li key={index}><Link to={`${navContent.link}`} onClick={this.props.onCollapse}>{navContent.title}</Link></li>)
                    })}
                </ul>
            </div>
        </div>)
    }
}

export default SideNav