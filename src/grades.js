import React from 'react';
import './App.css';

class Grades extends React.Component {
  render() {
		const grades = this.props.grades
		const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

  	return (
    	<div className="grades">
				<h2>Grades</h2>
				{grades.map(x =>
				{
					return(<li>{x}</li>)
				} 
				)}
				<h2>Average</h2>
				<li>{arrAvg(grades)}</li>
    	</div>
  	);
	}
}
export default Grades;