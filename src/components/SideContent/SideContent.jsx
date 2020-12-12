import React, { Component } from 'react';
import BaseSideContent from './BaseSideContent';


class SideContent extends Component {

    render(){
        let {title, contents} = this.props;
        return (
            <BaseSideContent title={title} contents={contents} children={this.props.children}/>
        )
    }
}

export default SideContent;