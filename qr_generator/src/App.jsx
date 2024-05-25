import { useState } from "react";

import "./App.css";

function App() {
  const [data,setData]=useState('')
  const [size,setSize]=useState('')
  const [img,setImg]=useState('')
  const [load,setLoad]=useState(false)
  const [generate,setGenerate]=useState(false)
  async function handleGenerate(){
    setLoad(true)
    // setGenerate(true)
    try{const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`
    setImg(url)}
    catch(error){
      console.log(error.message)
    }
    finally{
      setLoad(false)
      setGenerate(true)
    }
  }
  function handleDownload(){
    fetch(img).then((res)=>res.blob()).then((blob)=>{
      const link=document.createElement("a")
      link.href=URL.createObjectURL(blob)
      link.download="qr.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    })

  }
  return (
    <div className="card">
    <div className="main">
      <h1>QR-GENERATOR</h1>
     <div className="img-c">{ img &&<img
        src={img}
        alt=""
      />}</div>
      <div className="fields">
      <div className="form-elt form-floating">
      <input type="text" id='data' value={data} placeholder="text here" className="form-control" onChange={(e)=>setData(e.target.value)} name=""  />
      <label htmlFor="data">enter link</label>
      </div>
      <div className="form-elt form-floating">
      <input  type="number" id='size' placeholder="text here" className="form-control" value={size} onChange={(e)=>setSize(e.target.value)} name="" />

      <label htmlFor="size">enter size</label>
      </div>
      <div className="bt-sec">
        <button onClick={handleGenerate}className="btn btn-primary" disabled={load}>generate</button>
        <button onClick={handleDownload} className="btn btn-success" disabled={!generate}>download</button>
      </div>
      {load &&<div className="load">loading</div>}
      </div>
    </div>
    </div>
  );
}

export default App;
