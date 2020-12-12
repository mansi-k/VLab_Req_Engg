import React, {Component} from 'react';
import SplitPane from 'react-split-pane';
import {Button} from 'react-bootstrap';

import SideContent from './../SideContent/SideContent'
import GoJSContainer from './../GoJS_container/GoJS.container'
import "./BaseInputOutput.css"
import PopModal from '../PopModal/PopModal';

class BaseInputOutput extends Component {

    render(){
        let {title, contents} = this.props;

        return (
            <div>
                <SplitPane split="vertical" minSize={400} allowResize={true}>
                    <SideContent title={title} contents={contents} >
                        <h5>Task:</h5>
                        <h6>Create a use case diagram for book re-issue in library management system</h6>
                        <p>You're given a set of objects in the palette that will be involved by creating a use case diagram. 
                            Your task is to drag and drop them into the drawing area and establish relationships among them</p>
                        <p>Relationships can be established by drawing a directed path between objects and giving an appropriate label.</p>
                        <p>Label can be altered by double-clicking the 'defaut' text. Following are the valid labels that can be used to describe the
                        relationship</p>
                        <ul>
                            <li>default or blank(empty text): Standard association</li>
                            <li>&lt;&lt;include&gt;&gt;: Includes relation</li>
                            <li>&lt;&lt;extend&gt;&gt;: Extend relation</li>
                            <li>&lt;&lt;generalize&gt;&gt;: Generalize relation</li>
                        </ul>
                        <div className="button-container">
                            <Button variant="dark" className="verify" onClick={this.props.verifyDiagram}>Verify diagram</Button>
                        </div>
                    </SideContent>
                    <GoJSContainer nodeDataArray={this.props.nodeDataArray} 
                    initDiagram={this.props.initDiagram}
                    initPalette={this.props.initPalette}
                    paletteDataArray={this.props.paletteDataArray}
                    handleGraphStateChange={this.props.handleGraphStateChange}
                    linkDataArray={this.props.linkDataArray}/>
                </SplitPane>
                {this.props.showModal ? (<PopModal info={this.props.modalData} onClosefn={this.props.handleModalCloseClick} toShow={this.props.showModal}/>) : null}
            </div>

        );
    }
}

export default BaseInputOutput;
