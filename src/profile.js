import React from 'react';


class Profile extends React.Component {
  render() {
  	return (
    	<div className="profileInfo">
			<p className="firstName">	
				{this.props.firstName}
			</p>
			<p className = "lastName">
				{this.props.lastName}
			</p>
			<p className = "age">
				{this.props.age}
			</p>
    	</div>
  	);
	}
}
export default Profile;