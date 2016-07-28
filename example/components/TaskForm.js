import React from 'react';

let TaskForm = ({fields: {id, startTime, endTime, display, color}, resetForm, handleSubmit, submitting}) => (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Start Time</label>
        <input type="text" placeholder="Start Time" {...startTime}/>
      </div>
      <div>
        <label>End Time</label>
        <input type="text" placeholder="End Time" {...endTime}/>
      </div>
      <div>
        <label>Display</label>
        <input type="text" placeholder="Display" {...display}/>
      </div>
      <div>
        <label>Color</label>
        <input type="text" placeholder="Color" {...color}/>
      </div>
      <input type="hidden" {...id} />
      <button type="submit" disabled={submitting} >Submit</button>
    </form>
   );

export default TaskForm
