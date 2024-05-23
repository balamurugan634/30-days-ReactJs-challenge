import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [advice,setAdvice]=useState('click to get advice');
  async function getadvice(e){
    // e.preventDefault()
    const res=await fetch("https://api.adviceslip.com/advice") ;
    const data= await res.json();
    setAdvice(data.slip.advice);
    setCount((prevcount)=>prevcount+1);
    // console.log('im working');
  }
  // function reset(){
  //   setCount(0)
  // }
  // useEffect(function(){
  //   getadvice();
  //   // reset()
  // },[])
  return (
    <div>
      <h1>Advice App using React</h1>
      <h3>{advice}</h3>
      <button onClick={getadvice}>Get Advice</button>
      <p>No of credits used {count}</p>
    </div>
  );
}

export default App
