import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    fetch(`http://localhost:8080/`).then((res)=>console.log(res))
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
