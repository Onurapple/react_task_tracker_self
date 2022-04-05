import React, {useState} from 'react'

const AddTasks = ({addTask}) => {
    
    const [text, setText] = useState("");
    const [day, setDay] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
    addTask({ text, day, isDone: false });
    setText("");
    setDay("");

}

  return (
    <div>
      <form className='add-form' onSubmit={handleSubmit}>
          <div className='form-control'>
          <label htmlFor="taskName">Task</label>
          <input type="text" name='taskName' placeholder='Add Task' onChange={(e)=>setText(e.target.value)} value={text}/>
          </div>
          <div className='form-control'>
          <label htmlFor="dayName">Day & Time</label>
          <input type="text" name='dayName' placeholder='Add Day & Time'onChange={(e)=>setDay(e.target.value)} value={day}/>
          </div>
          <input type="submit" value="Save Task" className='btn btn-block'/>
      </form>
    </div>
  )
}

export default AddTasks

