import React, { Component } from 'react';
import './BaseSideContent.css'


class BaseSideContent extends Component {

    render(){
        let {title, contents, children} = this.props
        return (
            <div className="base-side-container">
                <h2>{title}</h2>
                {contents.map((content, index) => {
                    return (
                        <p key={`${title}-${content}-${index}`}>{content}</p>
                    )
                })}
                {children}
            </div>
        )
    }
}

export default BaseSideContent;