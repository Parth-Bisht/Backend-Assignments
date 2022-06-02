import React, { useState } from 'react'

const Todo = ({onAdd}) => {
  const [value,setValue] = useState("");
  const handleAdd = ()=>{
    const payload = {
      id: Math.round(Math.random()*10),
      title:value,
      status:false
    }
    onAdd(payload);
    setValue("");
  }
  return (
    <div>
      <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Todo
