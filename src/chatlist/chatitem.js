import React from 'react';
import './chatitem.scss';

class ChatItem extends React.Component {

	render() {
		// console.log(this.props.online);
		const photos = [
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-1.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-2.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-11.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-4.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-5.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-6.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-7.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-8.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-9.jpg',
			'http://animalworld.com.ua/images/2013/March/Foto/Moda/Animals-Dressed-Like-Humans-10.jpg',
		];

		const number = Math.floor(Math.random() * 10);
		const checkOnline = this.props.online ? 'chatitem__imgwrap chatitem__imgwrap_online' : 'chatitem__imgwrap'; 

		return (
			<div className='chatitem'>
				<div className={checkOnline}>
					<img className='chatitem__img' src={photos[number]} />
				</div>
				<div className='chatitem__infowrap'>
					<span className='chatitem__name'>Ronnie Lake</span>
					<span className='chatitem__message'>What do you think about it? What do you think about it?</span>
				</div>
			</div>
		)
	}
}

export default ChatItem;