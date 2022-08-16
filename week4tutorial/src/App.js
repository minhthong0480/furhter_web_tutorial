import './App.css';
import React, {useState, useEffect} from 'react'
import Login from './Login';
import Hello from './Hello';
import Nav from './Nav';


function App() {
      const [count,setCount] = useState(0)
    useEffect(() =>{
        document.title = `You clicked ${count}`
    })
  return (
    <div className="App">
      {/* <Login /> */}
      <button onClick={()=>setCount(count+1)}>Click</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count*2)}>Power</button>
      <Hello count={count}/>
      {/* <Nav /> */}
    </div>
  );
}

export default App;
