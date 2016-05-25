

export default ({sortedTasks}) => (
	<div className="info">
		{ sortedTasks.map(t=> <div><h3 className='task'> t.content</h3></div>)}
	</div>);

