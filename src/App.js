import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Simulation from './components/Simulation/Simulation'
import TheoryPage from './components/HomeComponent/TheoryPage'
import IntroPage from './components/HomeComponent/IntroPage'
import "./App.css"
import SimulationPage from './components/HomeComponent/SimulationPage';
import ReferencesPage from './components/HomeComponent/ReferencesPage';
import SelfEvalPage from './components/HomeComponent/SelfEvalPage'

class App extends React.Component {
	constructor(props) {
		super(props);
		document.title = "Vlabs: Requirement engineering"
	}

	render() {
		return (
				<Router>
				<Route path="/simulation/:id"
					render={(props) => <Simulation {...props} />} />
				<Route path="/" exact component={IntroPage} />
				<Route path="/theory" exact component={TheoryPage} />
				<Route path="/practice" exact component={SimulationPage} />
				<Route path="/quiz" exact component={SelfEvalPage} />
				<Route path="/references" exact component={ReferencesPage} />
				</Router>)
  }
}


export default App;
