import React from 'react';

export default ({viewType, increment, decrement, selectToday}) => ( 
	<div className="header__date__nav">
		<button className="header__date__nav__button" onClick={() => decrement(viewType)}>
			<i>{'<'}</i>
		</button>
		<button className="header__date__nav__button" onClick={() => increment(viewType)}>
			<i>{'>'}</i>
		</button>
		<div className="header__date__nav__today" onClick={() => selectToday()}>Today</div>
	</div>				
);

