import React from 'react';

export default ({caption, viewType, increment, decrement}) => ( 
		<div>
			<div>
				<button onClick={() => decrement(viewType)}>
					<i>{'<'}</i>
				</button>
				<h2>{caption}</h2>
				<button onClick={() => increment(viewType)}>
					<i>{'>'}</i>
				</button>
			</div>				
		</div>
	);

