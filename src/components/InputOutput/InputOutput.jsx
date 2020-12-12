import React, {Component} from 'react';
import { parse } from 'query-string'
import * as go from 'gojs'

import BaseInputOutput from './BaseInputOutput';
import SupportText from './../SupportText.json';
import Relations from './Relations.json'
import PaletteObjects from './Objects.json'

import { PolylineLinkingTool } from './../../functions/PolylineLinkingTool'
import { defineActor } from '../../functions/CustomFigures';

class InputOutput extends Component {
	initDiagram() {
		const $ = go.GraphObject.make;

		defineActor(go);
		// console.log(PolylineLinkingTool)
		let plinkTool = new PolylineLinkingTool();
		const diagram =
			$(go.Diagram,
				{
					'undoManager.isEnabled': true,  // must be set to allow for model change listening
					// 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
					'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
					model: $(go.GraphLinksModel,
						{
							linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
						})
				});

		diagram.toolManager.linkingTool = plinkTool;
		// define a simple Node template
		diagram.nodeTemplate =
			$(go.Node, 'Table',  // the Shape will go around the TextBlock
				new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
				$(go.Shape, 'Ellipse',
					{ row: 0, name: 'SHAPE', fill: 'white', width: 110, height: 50,strokeWidth: 0, portId: "", fromLinkable: true, toLinkable: true, cursor: "pointer" },
					// Shape.fill is bound to Node.data.color
					new go.Binding('fill', 'color'), new go.Binding('figure', 'figure'), 
					new go.Binding('width', 'width'),
					new go.Binding('height', 'height')),
				$(go.TextBlock,
					{ row: 0, margin: 8, editable: true, stroke: "red", font: "8pt sans-serif" },
					new go.Binding('row', 'row'),  // some room around the text
					new go.Binding('stroke', 'fontColor'),
					new go.Binding('text').makeTwoWay()
				)
			);
					
		diagram.linkTemplate =
			$(go.Link,
				// { reshapable: true, resegmentable: true },
				//{ routing: go.Link.Orthogonal },  // optional, but need to keep LinkingTool.temporaryLink in sync, above
				// { adjusting: go.Link.Stretch },  // optional

				new go.Binding("points", "points").makeTwoWay(),
				// $(go.TextBlock, {text: "ggwp"}),
				$(go.Shape, { strokeWidth: 1.5 }),
				$(go.Shape, { toArrow: "OpenTriangle" }),
				$(go.TextBlock, {text: "default", editable: true}, new go.Binding('text').makeTwoWay())
				);
		return diagram;
	}

	initPalette(){
		const $ = go.GraphObject.make;
		let palette = $(go.Palette, {layout: $(go.GridLayout, { alignment: go.GridLayout.Location })});
		palette.nodeTemplate =
		$(go.Node, "Vertical", { locationObjectName: "TB", locationSpot: go.Spot.Center },
		  $(go.Shape,
			{ width: 55, height:25, fill: "white" },
			new go.Binding("fill", "color"), 
			new go.Binding('figure', 'figure'),
			new go.Binding("width", "width", (w) => w / 2),
			new go.Binding("height", "height", (h) => h / 2)
			),
		  $(go.TextBlock,
			new go.Binding("text", "text"))
		);

		return palette
	}

	handleGraphStateChange(dataArray){
		let {linkDataArray, nodeDataArray} = dataArray;
		this.setState({linkDataArray, nodeDataArray}, () => {
			console.log(linkDataArray);
			console.log(nodeDataArray)
		})
	}

	createMessage(type, from, to){
		let message = ""
		if (type === this.messages.GENERALIZE){
			message = `There should be a generalization relationship from ${from} to ${to}`
		} else if (type === this.messages.INCORRECT_RELATION){
			message = `There should not be a relation from ${from} to ${to}`
		} else if (type === this.messages.NORMAL){
			message = `There should be standard association from ${from} to ${to}`
		} else if (type === this.messages.INCLUDES){
			message = `There should be an includes relationship from ${from} to ${to}`
		} else if (type === this.messages.ADD_RELATION){
			message = `There must be a relation between ${from} and ${to}`
		} else if (type === this.messages.EXTENDS){
			message = `There should be an extends relationship from ${from} to ${to}`
		}
		return message;
	}

	verifyDiagram(){
		let incorrecrRelations = [], missingRelations = []
		let links = this.state.linkDataArray;
		let relations_obj = Object.assign({}, Relations)[this.props.caseStudy][this.state.useCaseType]
		let isExist = false;
		for (let link of links){
			isExist = false
			console.log(link.from)
			if (link.from in relations_obj){
				for (let relation of relations_obj[link.from]){
					if (relation.to === link.to){
						if (relation.text !== link.text){
							incorrecrRelations.push({
								parentType: this.messages.INCORRECT_TEXT,
								"message": this.createMessage(relation.type, link.from, link.to)
							})
						}
						isExist = true;
						break;
					}
				}
			}

			if (!isExist){
				incorrecrRelations.push({
					parentType: this.messages.INCORRECT_RELATION,
					"message": this.createMessage(this.messages.INCORRECT_RELATION, link.from, link.to)
				})
			}
		}
		
		for (let [relation, value] of Object.entries(relations_obj)){
			for (let subRelation of value){
				let index = links.findIndex(link => {
					return link.from === relation && link.to === subRelation.to
				})
				if (index === -1)
					missingRelations.push({
						parentType: this.messages.ADD_RELATION,
						"message": this.createMessage(this.messages.ADD_RELATION, relation, subRelation.to)
					})
			}
		}

		let totalErrors = incorrecrRelations.concat(missingRelations)
		let modalData = {}
		if (totalErrors.length > 0) {
			modalData = {
				"res": "Incorrect Diagram",
				"desc": [`Total errors: ${totalErrors.length}`,`Hint: ${totalErrors[0].message}`]
			}
		} else {
			modalData = {
				"res": "Success!",
				"desc": [`The diagram seems to be correct`]
			}
		}

		this.setState({showModal: true, modalData})
	}

	closeModal(){
		this.setState({showModal: false})
	}


    constructor(props){
		super(props);
		this.messages = {
			INCORRECT_RELATION: "incorrectRelation",
			GENERALIZE: "generalize",
			INCORRECT_TEXT: "incorrectText",
			INCLUDES: "include",
			NORMAL: "normal",
			ADD_RELATION: "addRelation",
			"EXTENDS": "extend"

		}
        this.state = {
            title: "",
			contents: [],
			nodeDataArray: [],
			paletteDataArray: [],
			modalData: {
				"res": "Title",
				"desc": ["Description"]
			},
			showModal: false,
			linkDataArray: [
			]
        }
    }

    componentDidMount(){
		this.updateContents();
        // this.setState({contents: SupportText[type].contents})
	}

	updateContents(){
		let {type} = this.props;
		let queryProp = parse(this.props.location.search)
		let useCaseType = queryProp.type;
		console.log(useCaseType)
        this.setState({
				useCaseType,
				title: `${SupportText[type].title}: ${PaletteObjects[this.props.caseStudy][useCaseType].name}`,
				contents: SupportText[type].contents,
				paletteDataArray: Array.from(PaletteObjects[this.props.caseStudy][useCaseType].objects),
				nodeDataArray: [],
				linkDataArray: []
			})
	}
	
	componentDidUpdate(){
		let queryProp = parse(this.props.location.search)
		if (queryProp.type !== this.state.useCaseType){
			this.updateContents();
		}
		console.log(queryProp.type)
	}

    render(){
        let {title, contents} = this.state;
        return (
			<BaseInputOutput title={title} contents={contents} initDiagram={this.initDiagram}
				initPalette={this.initPalette}
				paletteDataArray={this.state.paletteDataArray}
				nodeDataArray={this.state.nodeDataArray}
				linkDataArray={this.state.linkDataArray}
				handleGraphStateChange={this.handleGraphStateChange.bind(this)} 
				verifyDiagram={this.verifyDiagram.bind(this)}
				modalData={this.state.modalData}
				handleModalCloseClick={this.closeModal.bind(this)}
				showModal={this.state.showModal}
				/>

        );
    }
}

export default InputOutput;
