import React, {Fragment} from 'react';
import Chatlist from '../chatlist/chatlist';
import CurrentChat from '../currentchat/currentchat';

class Chat extends React.Component {
	render() {
		return (
			<Fragment>
				<Chatlist />
				<CurrentChat />
			</Fragment>
		)
	}
}

export default Chat;