import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import SideContent from '../SideContent/SideContent';
import BaseCards from '../CardsContainer/BaseCards';
// import stakehdata from '../data_files/stakeholders.json';
import stakehdata_lib from '../data_files/Library_management_stakeholders.json'
import stakehdata_was from '../data_files/Waste_management_stakeholders.json'
import PopModal from '../PopModal/PopModal.jsx';

class BaseUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      stakeholders : "",
      showModal: false,
      modalfor: null
    }
    // console.log("in baseusers");
    // console.log(this.props);
    if(this.props.caseStudy == "library_management") {
      // this.setState({stakeholders: this.shuffleArray(stakehdata_lib['stakeholders'])});
      this.state = {
        stakeholders : this.shuffleArray(stakehdata_lib['stakeholders']),
        showModal: false,
        modalfor: null
      }
    }
    else {
      // this.setState({stakeholders: this.shuffleArray(stakehdata_was['stakeholders'])});
      this.state = {
        stakeholders : this.shuffleArray(stakehdata_was['stakeholders']),
        showModal: false,
        modalfor: null
      }
    }
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
        console.log("called "+index);
        const modstakeholders = [...this.state.stakeholders];
        modstakeholders[index] = {...modstakeholders[index]}
        modstakeholders[index].flipped = !modstakeholders[index].flipped;
        this.setState({stakeholders: modstakeholders})
        // if(modstakeholders[index].checked) {
        //   this.setState({stakeholders: modstakeholders, showModal: true, modalfor: index});
        //   console.log("if"+modstakeholders[index].checked);
        // }
        // else {
        //   this.setState({stakeholders: modstakeholders, showModal: false, modalfor: null});
        //   console.log("else");
        // }
        // console.log("newstate"+this.state.stakeholders[index].flipped);
      }

      handleInfoClick = index => {
        // console.log("infocalled "+index);
        this.setState({showModal: true, modalfor: index});
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
        let {title, contents} = this.props;
        console.log(this.state.showModal);
        return (
            <div>
                <SplitPane split="vertical" minSize={400} allowResize={true}>
                    <SideContent title={title} contents={contents} />
                    <BaseCards options={this.state.stakeholders} onChoosefn={this.handleChooseClick} onInfofn={this.handleInfoClick} />
                    {console.log("after")}
                </SplitPane>
                {this.state.showModal ? (<PopModal info={this.state.stakeholders[this.state.modalfor]} onClosefn={this.handleModalCloseClick} toShow={this.state.showModal}/>) : null}
            </div>

        );
    }
}
 
export default BaseUsers;