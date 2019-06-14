import React from 'react';
import './login.scss';
import Registration from './registration';
import Signup from './signup';

class Login extends React.Component {
	render() {

		return (
			<div className='login'>
				<Signup />
				<span className='login__text'>or</span>
				<Registration />
			</div>
		)
	}
}

export default Login;