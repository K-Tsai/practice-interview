import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

class Nav extends React.Component {
  render() {
  	return (
			<div className = "Nav">
    		<Link to= '/profile' className= "profileNav">
					Profile
				</Link>
				<Link to= '/grades' className = 'gradeNav'>
					Grades
				</Link>
			</div>
  	);
	}
}
export default Nav;