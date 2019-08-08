import React from 'react';
import { Link } from 'react-router-dom'
import Content from '/Content'

class Nav extends React.Component {
  render() {
  	return (
			<Content className = "Nav">
    		<Link to= '/profile'>
					Profile
				</Link>
				<Link to= '/grades'>
					Grades
				</Link>
			</Content>
  	);
	}
}
export default Nav;