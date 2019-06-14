import React from 'react';
import './outgoing.scss';

class Outgoing extends React.Component {
	render() {
		return(
			<div className='outgoing__wrapper'>
				<div className='outgoing__imgwrap'>
					<img className='outgoing__img' src='' />
				</div>
				<div className='outgoing__cloud'>
					<p className='outgoing__message'>Ahahaha!</p>
				</div>
			</div>
		)
	}
}

export default Outgoing;