import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const daysofweek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  const months=["January","February","March","April","May","June","July","August","september","October","November","December"]
  const [selectDate,setSelectDate]=useState(new Date())
 function daysinMonth(){
    const daysofmonth=[]
    const first=new Date(selectDate.getFullYear(),selectDate.getMonth(),1)
    const last=new Date(selectDate.getFullYear(),selectDate.getMonth()+1,0)
    // console.log(first.getDay())
    // console.log(last.getDate())
    // console.log(new Date(selectDate.getFullYear(),selectDate.getMonth(),1 ))
    for (let i=0;i<=first.getDay();i++){
      daysofmonth.push(null)
    }
    for (let i=1;i<=last.getDate();i++){
      daysofmonth.push(new Date(selectDate.getFullYear(),selectDate.getMonth(),i))
    }
    console.log(daysofmonth)
    return daysofmonth

  }
  function issameday(day1,day2){
    return day1.getDate()===day2.getDate() && day1.getFullYear()===day2.getFullYear() && day1.getMonth()===day2.getMonth()
  }
  function handlechange1(e){
    const new_month=parseInt(e.target.value,10)
    setSelectDate(new Date(selectDate.getFullYear(),new_month,1))
  }
  function handlechange2(e){
    const new_year=parseInt(e.target.value,10)
    setSelectDate(new Date(new_year,selectDate.getMonth(),1))
  }
 
  function handlebtn2(){
    setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()+1,1))
  }
  // daysinMonth()
  return (
    <div className='calendar'>
      <header>
        <button className='btn btn-primary' onClick={()=>{
           setSelectDate(new Date(selectDate.getFullYear(),selectDate.getMonth()-1,1))
        }}>prev</button>
        <select name="asdsa" id="" defaultValue={selectDate.getMonth()} value={selectDate.getMonth()} onChange={handlechange1}>
            {months.map((month,index)=>
            <option key={month} value={index}>{month}</option>
            )}
        </select>
        <select name="asd" id="" defaultValue={selectDate.getFullYear()} value={selectDate.getFullYear()} onChange={handlechange2}>
          {
            Array.from({length:10},(_,i)=>selectDate.getFullYear()-5+i).map((val)=>
              <option key={val} value={val}>{val}</option>
            )
          }
        </select>
        <button className='btn btn-primary' onClick={()=>handlebtn2()}>forw</button>
      </header>
      <div className="daysofweek">
        {daysofweek.map((day)=>
        <div key={day}>{day}</div>
        )}
      </div>
      <div className="day_main">
        {daysinMonth().map((day,index)=>
            <div key={index} className={day? (issameday(day,new Date()))?"day current":"day":"empty"}>{day ? day.getDate():""}</div>
        )}
      </div>

    </div>
  )
}

export default App
