import React, {Component} from 'react';
import BaseUsers from './BaseUsers'
import SupportText from './../SupportText.json'

class UsersContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
                title : SupportText["Users"].title,
                contents:  SupportText["Users"].contents
        }
    }

    render() { 
        let {title, contents} = this.state;
        return (
            <BaseUsers title={title} contents={contents} caseStudy={this.props.caseStudy} />
        );
    }
}
 
export default UsersContainer;