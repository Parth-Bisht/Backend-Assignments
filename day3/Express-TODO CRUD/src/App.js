import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import SingleTodo from './Components/SingleTodo';
import Todo from './Components/Todo';

function App() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/").then(({data})=>setTodos(data.todos))
  },[])
  const addTodo = (payload)=>{
    axios.post("http://localhost:8080/",payload).then((res)=>console.log(res))
    setTodos([...todos,payload])
  }
  const deleteTodo = (id)=>{
    axios.delete(`http://localhost:8080/${id}`).then((res)=>console.log(res));
    const nTodos = todos.filter(el=>el.id!==id);
    setTodos([...nTodos])
  }
  const toggleTodo = (payload)=>{
    setTodos(todos.map((l)=>(l.id===payload.id ? {...l, status: !l.status} : l)));
    axios.put(`http://localhost:8080/${payload.id}`,payload).then((res)=>console.log(res));
  }
  return (
    <div className="App">
      <Todo onAdd={addTodo}/>
      <hr />
      {todos.map((el)=>{
        return <SingleTodo key={el.id} {...el} onToggle={toggleTodo} onDelete={deleteTodo}/>
      })}
    </div>
  );
}

export default App;
