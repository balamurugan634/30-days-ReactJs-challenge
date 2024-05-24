import React from 'react'
import {Person,ChatDots} from 'react-bootstrap-icons'
const Message = (props) => {
  return (
    <div className={`d-flex ${props.user &&'justify-content-end'}`}>
        {
            props.user?(<span className='message-right' key={props.index}><span className='message-text'>{props.message}
            <Person className='message-icon'/></span></span>):(
            <span className='message-left'><span className='message-text'><ChatDots className='message-icon'/> {props.message}</span></span>)
        }
      
    </div>
  )
}

export default Message
