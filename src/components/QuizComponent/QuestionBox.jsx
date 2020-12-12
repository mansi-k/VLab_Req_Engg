import React,{Component} from "react";
import "./QuizComponent.css";

class QuestionBox extends Component {

  constructor(props){
    super(props)
    this.evaluateResponse.bind(this)
  }

  render(){
    return (
      <div className="questionBox" key={`question_${this.props.questionId}`}>
          <div className="question" key={this.props.questionId}>{this.props.question}</div>
          {this.props.options.map((text, answer_index) => (
            <div key={`fragment_${this.props.questionId}_${answer_index}`} 
            className={this.props.isSubmit && this.evaluateResponse(text,answer_index) === 1?"correct-state-parent":""}
            >
              <input onChange={()=>this.props.onChangefn(this.props.index, answer_index)} type="radio" id={`option_${this.props.questionId}_${answer_index}`} key={`option_${this.props.questionId}_${answer_index}`} name={`name_${this.props.questionId}`} value={`value_${text}`} />
              <label htmlFor={`option_${text}`} className={this.props.isSubmit && this.evaluateResponse(text,answer_index) !== -1?(this.evaluateResponse(text,answer_index)===1?"correct-state":"error-state"):""}> {text}</label>
              {/* <label>{this.props.isSubmit && this.evaluateResponse(text) !== -1?(this.evaluateResponse(text)===1?"Correct":"Incorrect"):""}</label> */}
            </div>
        
          ))}
          
      </div>

    )
  }

  evaluateResponse(option_text,ans_idx){
    if (this.props.correctanswer === option_text)
      return 1;
    if (this.props.responses[this.props.index] === -1) {
      return -1;
    }
    else {
      if (this.props.responses[this.props.index] === ans_idx)
        return 0;
      return -1;
    }
  }
}



export default QuestionBox;
