import React from 'react'

const SingleTodo = (props) => {
    const handleDelete = ()=>{
        props.onDelete(props.id)
    }
    const handleToggle = ()=>{
        const payload = {
            id:props.id,
            title: props.title,
            status: !props.status
        }
        props.onToggle(payload)
    }
  return (
    <div>
      {props.title} - {props.status?"Done":"Not Done"}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

export default SingleTodo
