import React from 'react';
import MonthWeeks from './MonthWeeks';
import MonthDaysHeader from './MonthDaysHeader';

export default  ({weeks}) => (
		<div className="month">
				<MonthDaysHeader />
				<MonthWeeks weeks={weeks}/>
		</div>
);

