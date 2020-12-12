import React, { Component } from 'react';
import './GoJS.container.css';

import { ReactDiagram, ReactPalette } from 'gojs-react';


class GoJSContainer extends Component {

	handleModelChange(changes) {
		console.log(changes)
		let linkDataTemp = this.props.linkDataArray,
			nodeDataTemp = this.props.nodeDataArray;
		if ("insertedLinkKeys" in changes) {
			for (let insertedData of changes["modifiedLinkData"]){
				let linkIndex = linkDataTemp.findIndex(node => {
					return insertedData.key === node.key
				})
				if (linkIndex !== -1)
					continue;
				linkDataTemp = linkDataTemp.concat(insertedData)
			}
		}if ("modifiedLinkData" in changes) {
			for (let key of changes["modifiedLinkData"]){
				let index = linkDataTemp.findIndex((i) => {
					return i["key"] === key["key"];
				})

				linkDataTemp[index] = key
			}
		}if ("removedLinkKeys" in changes){
			for (let key of changes["removedLinkKeys"]){
				let index = linkDataTemp.findIndex((i) => {
					return i["key"] === key;
				})
				if (index !== -1){
					linkDataTemp.splice(index, 1);
				}
			}
		}if ("removedNodeKeys" in changes) {
			for (let key of changes["removedNodeKeys"]){
				let index = nodeDataTemp.findIndex((i) => {
					return i["key"] === key;
				})
				if (index !== -1){
					nodeDataTemp.splice(index, 1);
				}
			}			
		}if ("insertedNodeKeys" in changes){
			for (let modifiedData of changes["modifiedNodeData"]){
				let nodeIndex = nodeDataTemp.findIndex(node => {
					return modifiedData.key === node.key
				})
				if (nodeIndex !== -1)
					continue;
				nodeDataTemp = nodeDataTemp.concat(modifiedData)
			}

		}if ("modifiedNodeData" in changes){
			for (let change of changes["modifiedNodeData"]){
				let index = nodeDataTemp.findIndex((i) => {
					return i["key"] === change["key"];
				})
				if (index !== -1){
					nodeDataTemp[index] = change;
				}
			}
		}
		this.props.handleGraphStateChange({linkDataArray: linkDataTemp, nodeDataArray: nodeDataTemp});
	}
	
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div>
				<ReactPalette 
					initPalette={this.props.initPalette}
					divClassName='palette-component'
					nodeDataArray={this.props.paletteDataArray}
				/>
				<ReactDiagram
					initDiagram={this.props.initDiagram}
					divClassName='diagram-component'
					onModelChange={this.handleModelChange.bind(this)}
					nodeDataArray={this.props.nodeDataArray}
					linkDataArray={this.props.linkDataArray}
				/>
			</div>
		)
	}
}

export default GoJSContainer;