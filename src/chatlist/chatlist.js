import React from 'react';
import './chatlist.scss';
import ChatItem from './chatitem';
import Search from './search';
import User from './user';

class Chatlist extends React.Component {
	constructor() {
		super();
		console.log('chatlist constructor');
	}

	componentDidMount() {
		console.log('chatlist after render')
	}

	render () {
		console.log('chatlist render method');
		return (
			<div className='chatlist__wrapper'>
				<Search />
				<ul className='chatlist__list'>
					<li>
						<ChatItem online />
					</li>
					<li>
						<ChatItem online />
					</li>
					<li>
						<ChatItem />
					</li>
					<li>
						<ChatItem />
					</li>
				</ul>
				<User />
			</div>
		)
	}
}

export default Chatlist;