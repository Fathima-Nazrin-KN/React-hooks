import React,{useState,useEffect,useRef} from 'react';
import './App.css';

function App() {
  const age = useRef(18);
  const [x,setx] = useState(0);

  function updateAge(){
     age.current = age.current+1;
     console.log(age.current);
  }
    

  
  const [name,setName] = useState("");
  const [agee,setAge] = useState(0);
  const [isAdult,setisAdult] = useState(false);

  useEffect(()=>{
    console.log("welcome");
  },[])
  useEffect(()=>{
     setisAdult(age>=18)
  },[age])
  
  return (
    <div >

      <button onClick={()=>setx(x+1)}>Re-render</button>
      <button onClick={updateAge}>Update-age</button>
      <button onClick={()=>console.log(age.current)}>Console log</button>
{/* */}
      
    </div>
  );
}

export default App;
