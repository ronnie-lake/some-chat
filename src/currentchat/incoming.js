import React from 'react';
import './incoming.scss';

class Incoming extends React.Component {
	render() {
		return(
			<div className='incoming__wrapper'>
				<div className='incoming__imgwrap'>
					<img className='incoming__img' src='' />
				</div>
				<div className='incoming__cloud'>
					<p className='incoming__message'>Are you lalka щтоль?)</p>
				</div>
			</div>
		)
	}
}

export default Incoming;