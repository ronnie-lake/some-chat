import React from 'react';
import './search.scss';

class Search extends React.Component {
	render() {
		return (
			<div className='search__wrapper'>
			<span className='search__loupe'></span>
				<input className='search__input'  placeholder='Search'></input>
			</div>
		)
	}
}

export default Search;