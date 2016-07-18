
import React from 'react';
import {taskTimeSlots} from './../utils/timeUtils'

export default ({tasks, actions, view}) => (<div className="info">
			{ tasks.map((t, index)=> (<div key={index}
					style={{width: t.width +'%',
							marginLeft: tasks.length>1 ? '0' : t.column + '%',
							backgroundColor:t.color}} onClick={() => actions.selectTask(t, view)}>
				<h3 style={{height:1.8 * t.slots +'rem'}} className='task'> {t.display}</h3>
			</div>))}
		</div>);


