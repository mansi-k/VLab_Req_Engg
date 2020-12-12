import React, {Component} from 'react';
import SplitPane from 'react-split-pane'

import SideContent from '../SideContent/SideContent'
import GoJSContainer from '../GoJS_container/GoJS.container'

class BaseTestComponent extends Component {

    render(){
        let {left_title, left_contents, right_title, right_contents } = this.props;
    
        return (
            <div>
                <SplitPane split="vertical" minSize={400} allowResize={true}>
                    <SideContent title={left_title} contents={left_contents} />
                    <SideContent title={right_title} contents={right_contents} />
                </SplitPane>
            </div>

        );
    }
}

export default BaseTestComponent;
