import React from 'react';
import './textarea.scss';

class Textarea extends React.Component {
	render() {
		return (
			<div className='textarea__wrapper'>
				<textarea className='textarea__input'  placeholder='Type something to send...'></textarea>
				<div className='textarea__button'></div>
			</div>
		)
	}
}

export default Textarea;