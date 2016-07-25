import React from 'react';

export default ({viewType, selectedDay, config, increment, decrement, selectToday, dispatch}) => {
	var viewChangedEventAction = (func, view) => {
		dispatch(func(view));
		config.retrieveDataAction
			? dispatch(config.retrieveDataAction(view, selectedDay)) : null;
	};
	return (
		<div className="header__date__nav">
			<button className="header__date__nav__button"
					onClick={() => viewChangedEventAction(decrement, viewType)}>
				<i>{'<'}</i>
			</button>
			<button className="header__date__nav__button"
					onClick={() => viewChangedEventAction(increment, viewType)}>
				<i>{'>'}</i>
			</button>
			<button className="header__date__nav__button"
					onClick={() => viewChangedEventAction(selectToday, viewType)}>Today</button>
		</div>
	);
}

