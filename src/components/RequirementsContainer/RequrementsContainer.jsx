import React, {Component} from 'react';
import BaseRequirements from '../RequirementsContainer/BaseRequirements';
import SupportText from './../SupportText.json'

class RequirementsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: SupportText["Requirements"].title,
            contents: SupportText["Requirements"].contents
        }    
    }

    render() { 
        let {title, contents} = this.state;
        return (
            <BaseRequirements title={title} contents={contents} caseStudy={this.props.caseStudy} />
        );
    }
}
 
export default RequirementsContainer;