import React from 'react';

let TaskForm = ({fields: {id, startTime, endTime, display, color}, resetForm, handleSubmit, submitting, onRemove, dispatch}) => (
  <div className="taskForm__container">
  <form onSubmit={handleSubmit} className="taskForm">
      <div className="taskForm__input">
        <label className="taskForm__input__label">Start Time</label>
        <input className="taskForm__input__text" type="text" placeholder="Start Time" {...startTime}/>
      </div>
      <div className="taskForm__input">
        <label className="taskForm__input__label">End Time</label>
        <input className="taskForm__input__text" type="text" placeholder="End Time" {...endTime}/>
      </div>
      <div className="taskForm__input">
        <label className="taskForm__input__label">Display</label>
        <input className="taskForm__input__text" type="text" placeholder="Display" {...display}/>
      </div>
      <div className="taskForm__input">
        <label className="taskForm__input__label">Color</label>
        <input className="taskForm__input__text" type="text" placeholder="Color" {...color}/>
      </div>
      <input type="hidden" {...id} />
    <div className="taskForm__input">
      <button className="taskForm__input__button" type="submit" disabled={submitting} >{id.value ? 'update' : 'submit'}</button>
    {id.value ? <button className="taskForm__input__button" type="button" disabled={submitting} onClick={e=>onRemove(id.value, dispatch)} >delete</button> : null}
    </div>
    </form>
    </div>
   );

export default TaskForm
