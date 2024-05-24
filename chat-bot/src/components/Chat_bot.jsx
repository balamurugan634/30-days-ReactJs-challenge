import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./Message";
import { Key } from "react-bootstrap-icons";

const Chat_bot = () => {
    const [message,setMessage]=useState([
        {
            message:'hi'
        }
    ])
    const [text,setText]=useState('')
    const analyze =({text})=>{
        const date=new Date();
        if(text.includes('hi') || text.includes('hello'))
            return 'hi how can i help you?'
        else if(text.includes('what is your name?'))
            return 'My name is jarvis'
        else if(text.includes('date'))
            return date.getDate("yyyy-mm-dd")
        else if(text.includes('month'))
            return date.getMonth()
        else if(text.includes('year'))
            return date.getFullYear()
        else
            return "i can't get you"
    }
    function sendinfo(){
        console.log({text})
        let list=[...message,{message:text,user:true}]
        console.log(list)
        if(list.length >0){
            const result=analyze({text})
            list=[...list,{message:result}]
            setMessage(list)
            setText("")
            setTimeout(()=>{document.querySelector("#copyright").scrollIntoView(true)},1)
            {document.getElementById("toscroll").focus()}


        }
        else{
            list=[...list,{message:`hi ${text}`},{message:'how can i help you?'}]
            setMessage(list)
            setText("")
            setTimeout(()=>{document.querySelector("#copyright").scrollIntoView(true)},1)
            {document.getElementById("toscroll").focus()}
        }
    }
  return (
    <div>
      {/* <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous"
        ></link>
      </head> */}
      <div className="logo_sec">
        <img src={logo} alt="" height={150} width={150} />
        <h2 className="text-primary">Chat-bot</h2>
      </div>
      <div className="message_sec">
            {
                message.length>0 && message.map((data,index)=><Message {...data} key={index}/>)
            }
            <div className="d-flex">
                <input type="text" name="" id="toscroll" className="form-control " placeholder="enter your message here" required value={text} onChange={(e)=>(setText(e.target.value))}/>
                <button type="primary" className="btn-primary ms-2 p-2 " onClick={()=>sendinfo( )}>send</button>
            </div>
            <div className="mt-3 " id="copyright">
                Copyrights reserved &copy;
            </div>
      </div>
    </div>
  );
};

export default Chat_bot;
