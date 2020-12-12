import React, {Component} from 'react';
import BaseTestComponent from './BaseTestComponent';
import SupportText from './../SupportText.json'

class TestComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            left_title: "",
            left_contents: [],
            right_title:"",
            right_contents: []
        }
    }

    componentDidMount(){
        let {type} = this.props;
        this.setState({left_title: SupportText[type].title})
        this.setState({left_contents: SupportText[type].contents})
        this.setState({right_title: SupportText[this.props.caseStudy].title})
        this.setState({right_contents: SupportText[this.props.caseStudy].contents})
    }

    render(){
        let {left_title, left_contents, right_title, right_contents} = this.state;
        return (
            <BaseTestComponent left_title={left_title} left_contents={left_contents} right_title={right_title} 
            right_contents={right_contents} />

        );
    }
}

export default TestComponent;
