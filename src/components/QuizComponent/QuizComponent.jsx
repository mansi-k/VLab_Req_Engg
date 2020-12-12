import React, { Component } from "react";
import "./QuizComponent.css";
import questionAPI from './question';
import QuestionBox from './QuestionBox';

class QuizComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionBank: [],
			score: 0,
			responses: [],
			isSubmit: false
		};
	}

	componentDidMount() {
		this.getQuestions().then(question => {this.setResponses();})
	}

	getQuestions = () => {
		return questionAPI().then(question => {
			return this.setStatePromise({
				questionBank: question
			});
		});
	};

	setStatePromise(obj) {
		return new Promise((resolve, reject) => {
			return this.setState(obj, (err, res) => {
				if (err)
					reject(err);
				resolve(res);
			})
		})
	}

	setResponses = () => {
		let responses = []
		let len = this.state.questionBank.length;
		//console.log("Len is ", len)
		for (let i = 0; i < len; i++) {
			responses.push(-1)
		}
		this.setState({
			responses: responses
		});
		//console.log(this.state.responses)
	};

	playAgain = () => {
		this.getQuestions();
		this.setState({
			score: 0,
			responses: []
		});
	};
	
	tickAnswer = (index, answer_index) => {
		const responses = [...this.state.responses]
		responses[index] = answer_index
		this.setState({
			responses: responses
		})
		console.log(this.state.responses)
	};

	submit = (e) => {
		e.preventDefault()
		let isSubmit = true
		this.setState({
			isSubmit: isSubmit
		})
	};

	render() {
		console.log("question bank is" ,this.state.questionBank)
		return (
			<div className="container">
				<div className="title">
					Quiz
          </div>
				<form key={`form`} onSubmit={this.submit} >
					{this.state.questionBank.length > 0 &&
						this.state.questionBank.map(
							({ question, answers, correct, questionId }, index) => <QuestionBox question={question}
								options={answers}
								key={questionId}
								questionId={questionId}
								correctanswer={correct}
								index={index}
								onChangefn={this.tickAnswer.bind(this)}
								responses={this.state.responses}
								isSubmit={this.state.isSubmit}
							/>)
					}
					<center>
					<button className="btn btn-info" type="submit"> Evaluate </button>
					</center>
				</form>
			</div>
		)
	}
}

export default QuizComponent;
