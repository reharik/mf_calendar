import React from 'react';

export default ({viewType, increment, decrement, selectToday}) => ( 
			<div className="calendar__header__date__nav">
				<button onClick={() => decrement(viewType)}>
					<i>{'<'}</i>
				</button>
				<button onClick={() => increment(viewType)}>
					<i>{'>'}</i>
				</button>
				<h6 onClick={() => selectToday()}>Today</h6>
			</div>				
	);

