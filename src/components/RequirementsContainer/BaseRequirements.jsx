import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import SideContent from '../SideContent/SideContent';
import BaseCards from '../CardsContainer/BaseCards';
// import reqdata from '../data_files/requirements.json';
import reqdata_lib from '../data_files/Library_management_requirements.json';
import reqdata_was from '../data_files/Waste_management_requirements.json';
import PopModal from '../PopModal/PopModal.jsx';

class BaseUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			requirements: [],
			showModal: false,
			modalfor: null
		}

	}

	componentDidMount() {
		if (this.props.caseStudy === "library_management")
			this.setState({requirements: this.shuffleArray(reqdata_lib['requirements'])})
		else if (this.props.caseStudy === "waste_management")
			this.setState({requirements: this.shuffleArray(reqdata_was['requirements'])})
	}

	shuffleArray(array) {
		let i = array.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	handleChooseClick = index => {
		console.log("called " + index);
		const modrequirements = [...this.state.requirements];
		modrequirements[index] = { ...modrequirements[index] }
		modrequirements[index].flipped = !modrequirements[index].flipped;
		this.setState({ requirements: modrequirements })
		// console.log("newstate"+this.state.requirements[index].flipped);
	}

	handleInfoClick = index => {
		// console.log("infocalled "+index);
		this.setState({ showModal: true, modalfor: index });
		// console.log("info "+this.state.showModal+" "+this.state.modalfor);
	}

	handleModalCloseClick = () => {
		this.setState({
			showModal: false,
			modalfor: null
		});
		// console.log("hello");
	}

	render() {
		let { title, contents } = this.props;
		console.log(this.state.showModal);
		return (
			<div>
				<SplitPane split="vertical" minSize={400} allowResize={true}>
					<SideContent title={title} contents={contents} />
					<BaseCards options={this.state.requirements} onChoosefn={this.handleChooseClick} onInfofn={this.handleInfoClick} />
					{console.log("after")}
				</SplitPane>
				{this.state.showModal ? (<PopModal info={this.state.requirements[this.state.modalfor]} onClosefn={this.handleModalCloseClick} toShow={this.state.showModal} />) : null}
			</div>

		);
	}
}

export default BaseUsers;