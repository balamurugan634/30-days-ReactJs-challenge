import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { useMemo } from 'react'

function App() {
 const [items,setItems]=useState([])
 const inputref=useRef()
 const [query,setQuery]=useState('')

function onSubmit(e){
     e.preventDefault()
    const value=inputref.current.value
    if (value.length==='') return
    setItems(prevItems =>{return [...prevItems,value]})
    inputref.current.value=''
    console.log(query)
  }
 const filteritems= useMemo(()=>{return (items.filter((item) => {return item.toLowerCase().includes(query.toLowerCase())}))},[query,items])
  
  return (
    <>
    <form onSubmit={onSubmit}>
     search:<input type='search' value={query} onChange={(e)=>setQuery(e.target.value)}/>
     <br />
     add items:<input type='text'ref={inputref}/>
     <button type='submit'>Add</button>
     </form>
     <div>
      <h3>items:</h3>
      {filteritems.map((item,index)=>(
        <div key={index}>{item}</div>
  ))}
     </div>
    </>
  )
}

export default App
