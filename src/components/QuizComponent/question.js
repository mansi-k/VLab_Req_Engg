const qBank = [
  {
    question:
      "Which of the following is the understanding of software product limitations, learning system related problems or changes to be done in existing systems beforehand, identifying and addressing the impact of project on organization and personnel etc?",
    answers: ["Software Design", "Software Analysis", "Requirement Gathering", "System Analysis"],
    correct: "System Analysis",
    questionId: 0
  },
  {
    question:
      "Software Requirement Specification (SRS) is also known as specification of:-",
    answers: ["White box testing", "Acceptance testing", "Integrated testing", "Black box testing"],
    correct: "Black box testing",
    questionId: 1
  },
  {
    question:
      "Which is focused towards the goal of the organization?",
    answers: ["Feasibility study", "Requirement gathering", "Software requirement specification", "Software requirement validation"],
    correct: "Feasibility study",
    questionId: 2
  },
  {
    question:
      "Select the developer specific requirement?",
    answers: ["Portability", "Maintainability", "Availability", "Both a and b"],
    correct: "Both a and b",
    questionId: 3
  }, 
  {
    question:
      "Which one of the following is a requirement that fits in a developer’s module ?",
    answers: ["Availability", "Testability", "Usability", "Flexibility"],
    correct: "Testability",
    questionId: 4
  }, 
  {
    question: "Which of the following property of SRS is depicted by the statement : \"Conformity to a standard is maintained\"",
    answers: ["Correct", "Complete", "Consistent", "Modifiable"],
    correct: "Complete",
    questionId: 5
  }
];

let totalLen = qBank.length;

export default (n = totalLen) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
