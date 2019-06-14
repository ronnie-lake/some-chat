import React from 'react';
import './registration.scss';

class Registration extends React.Component {
	render() {
		return (
			<div className='registration'>
				<span className='registration__caption'>create new account</span>
				<form className='signup__form'>
					<label className='registration__name' for='loginField'>E-mail</label>
					<input className='registration__field' id='loginField' type='text' />
					<label className='registration__name' for='passwordField'>Password</label>
					<input className='registration__field' id='passwordField' type='password' />
					<label className='registration__name' for='repeatpasswordField'>Repeat password</label>
					<input className='registration__field' id='repeatpasswordField' type='password' />
					<button className='registration__button'>register</button>
				</form>
			</div>
		)
	}
}

export default Registration;