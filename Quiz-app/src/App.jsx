import { useEffect, useState } from 'react'

import './App.css'
import Data from './assets/Data-quiz.json'
function App() {
const [currentqn,setCurrentqn]=useState(0)
const [timer,setTimer]=useState(10)
const [score,setScore]=useState(0)
const [load,setLoad]=useState(false)
function handleOpt(optionval){
  if(optionval===Data[currentqn].ans){
    setScore((prevscore)=>prevscore+1)
  }
  if(currentqn < Data.length-1){
    setCurrentqn((currentval)=>currentval+1)
    setTimer(10)
  }
  else{
    setLoad(true)
  }
}
function handleRestart(){
  setCurrentqn(0)
  setScore(0)
  setTimer(10)
  setLoad(false)
}
useEffect(()=>{
  let interval;
  if(timer>0 && !load){
    interval=setInterval(()=>{
      setTimer((prevtime)=>prevtime-1)
    },1000)
  }
  else{
    clearInterval(interval)
    setLoad(true)
  }
  return ()=>clearInterval(interval)
},[timer,load])
  return (
   <div className='main-sec'>
   {load ?( <div className="final-phase" >
      <h2>your score : {score}/{Data.length}</h2>
      <button className='btn btn-danger' onClick={handleRestart}>Restart</button>
    </div>):(
        <div className="initial-phase" >

        <h2>Question {currentqn+1}</h2>
        <p>{Data[currentqn].qn}</p>
        <div className="btn-list">
          {Data[currentqn].opt.map((optionval,index)=>
          <button className="btn btn-primary" key={index} onClick={()=>handleOpt(optionval)}>{optionval}</button>)}
        
        </div>
        <h6>Time left :{timer}s</h6>
     
      </div>
     
    )}
  
   </div>
  )
}

export default App
