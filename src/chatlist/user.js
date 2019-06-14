import React from 'react';
import './user.scss';

class User extends React.Component {
	render() {
		return(
			<div className='user__wrapper'>
				<span className='user__name'>Leni Zauber</span>
				<span className='user__exit'></span>
			</div>
		)
	}
}

export default User;

