import React from 'react';


class Profile extends React.Component {
  render() {
  	return (
    	<div className="profileInfo">
			<p className="firstName">	
				First Name: {this.props.firstName}
			</p>
			<p className = "lastName">
				Last Name: {this.props.lastName}
			</p>
			<p className = "age">
				Age: {this.props.age}
			</p>
    	</div>
  	);
	}
}
export default Profile;