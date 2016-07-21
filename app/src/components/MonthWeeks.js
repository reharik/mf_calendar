import React from 'react'
import MonthWeekContainer from'./../containers/MonthWeekContainer';

export default ({weeks}) => (
	<div className="month__weeks">
		{ weeks.map((week, idx) => ( <MonthWeekContainer week={week} key={idx} /> ))}
	</div>
);
