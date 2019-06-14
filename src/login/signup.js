import React from 'react';
import './signup.scss';

class Signup extends React.Component {
	render() {
		return (
			<div className='signup'>
				<span className='signup__caption'>log in</span>
				<form className='signup__form'>
					<label className='signup__name' for='loginField'>E-mail</label>
					<input className='signup__field' id='loginField' type='text' />
					<label className='signup__name' for='passwordField'>Password</label>
					<input className='signup__field' id='passwordField' type='password' />
					<button className='signup__button'>login</button>
				</form>
			</div>
		)
	}
}

export default Signup;