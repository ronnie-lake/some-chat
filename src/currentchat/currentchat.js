import React from 'react';
import './currentchat.scss';
import Outgoing from './outgoing';
import Incoming from './incoming';
import Textarea from './textarea';

class CurrentChat extends React.Component {
	render() {
		return (
			<div className='currentchat'>
				<div className='currentchat__header'>
					<h2 className='currentchat__name'>Ronnie Lake</h2>
					<span className='currentchat__indicator'></span>
				</div>
				<div className='currentchat__chatbody'>
					<Outgoing />
					<Incoming />
				</div>
				<Textarea />
			</div>
		)
	}
}

export default CurrentChat;