import React from 'react';
import './App.css';
import Profile from './profile';
import Grades from './grades';
import { Route, Switch } from 'react-router-dom';
import Nav from './nav'
class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			fName: "Kevin", 
			lName: "Tsai",
			age: 26,
			grades: [90, 87, 75, 54, 60]
		}
	}
  render() {
  	return (
    	<div className="App">
				<nav>
					<Nav />
				</nav>
				<main>
					<Switch>
						<Route path = '/profile' component = {Profile} />
						<Route path= '/grades' component = {Grades} />
					</Switch>
				</main>
				{/* <Profile  */}
				{/* firstName = {this.state.fName} */}
				{/* lastName = {this.state.lName} */}
				{/* age = {this.state.age} */}
				{/* /> */}
				{/* <Grades  */}
				{/* grades = {this.state.grades} */}
				{/* /> */}

    	</div>
  	);
	}
}
export default App;
