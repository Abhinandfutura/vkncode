import React from 'react'
import {BsPinAngle,BsToggleOn} from 'react-icons/bs'
import './BodyRight.css'
import {TiMessages} from 'react-icons/ti'
 import {TbMessageOff} from 'react-icons/tb'
import {IoIosFunnel} from 'react-icons/io'
import {BiMessage} from 'react-icons/bi'
import {BsBraces} from 'react-icons/bs'
function BodyRight() {
  return (
      <div >
    <div   style={{display: 'flex',
    flexDirection: 'column',
    border: '1px solid #00000040',
   height: '515px'}} >
        <div  className='textBox'>
        <input type='text' placeholder='Make a comment'  className='inputBox1'
         />
      

        </div>

        <BsPinAngle style={{fontSize:'20px',cursor:'pointer'}} className='pin'/>

<div className='Buttons'>
    <button className='Btn cancelBtn'>Cancel</button>
    <button className='Btn'>Submit</button>
</div>
<hr style={{fontSize:'1px',marginTop:'10px',borderTop:'1px solid 00000033'
,width:'361px'
}} />
<div className='message'>
<TiMessages   className='messageIc' style={{position:'relative'}}/>
<h4 >No comments__yet</h4>
<div style={{width:'341px'}}>
<p style={{margin:'0px',color:'grey'}}>Give feedback, ask questions, or start a discussion in the comments.</p>
</div>

</div>


    </div>
    <div className='commmentEnd ' style={{height:'46px'}}>
    <div style={{width:'69%',display:'flex',alignItems:'center'}}>
<BsToggleOn className='item'/>
<p className='item1'>All screen comments</p>
</div>
<div  style={{width:'99px'}}>
<TbMessageOff className='item'/>
<IoIosFunnel  className='item'/>
</div>

</div>
<div style={{right:'40px' ,position:"absolute",
    top: '14px',
    fontSize: '24px',
    background:' #0000002b',
    color: '#443c3c',
    padding:' 4px 9px',
    right: '-47px',
    borderRadius:' 4px'
    }}>
<BiMessage />
</div>
<div style={{right: '-35px',
    position: 'absolute',
    color: '#443c3c',
    top: '68px'
  }}>
<img src="data:image/svg+xml;base64,PHN2ZyBpZD0iU21vY2tfQ29kZV8xOF9OIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8cmVjdCBpZD0iQ2FudmFzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNmZjEzZGMiIG9wYWNpdHk9IjAiLz4KICA8cGF0aCBpZD0iUGF0aF8zNjEwNSIgZGF0YS1uYW1lPSJQYXRoIDM2MTA1IiBkPSJNOC4yMjYsMTQuNDczYS41LjUsMCwwLDEtLjQ4My4zNzFINy4yMjdhLjUuNSwwLDAsMS0uNDcyLS42NjZMOS43ODYsMi42OTNhLjUuNSwwLDAsMSwuNDgzLS4zN2guNWEuNS41LDAsMCwxLC40NzIuNjY1WiIgZmlsbD0iIzcwNzA3MCIvPgogIDxwYXRoIGlkPSJQYXRoXzM2MTA2IiBkYXRhLW5hbWU9IlBhdGggMzYxMDYiIGQ9Ik0xNy43NDYsOS41M2wtNC4wOTUsNC4xNmEuNS41LDAsMCwxLS43MTMsMGwtLjQ0Ni0uNDUzYS41LjUsMCwwLDEsMC0uN0wxNS45NzEsOSwxMi40OTIsNS40NjRhLjUuNSwwLDAsMSwwLS43bC40NDYtLjQ1NGEuNS41LDAsMCwxLC43MTMsMGw0LjA5NSw0LjE2QS43Ni43NiwwLDAsMSwxNy43NDYsOS41M1oiIGZpbGw9IiM3MDcwNzAiLz4KICA8cGF0aCBpZD0iUGF0aF8zNjEwNyIgZGF0YS1uYW1lPSJQYXRoIDM2MTA3IiBkPSJNLjI1NCw4LjQ3bDQuMS00LjE2MWEuNS41LDAsMCwxLC43MTMsMGwuNDQ2LjQ1NGEuNS41LDAsMCwxLDAsLjdMMi4wMjksOWwzLjQ3OSwzLjUzNWEuNS41LDAsMCwxLDAsLjdsLS40NDYuNDUzYS41LjUsMCwwLDEtLjcxMywwTC4yNTQsOS41M2EuNzYuNzYsMCwwLDEsMC0xLjA2WiIgZmlsbD0iIzcwNzA3MCIvPgo8L3N2Zz4K"/>
</div>
<div style={{right: '-35px',
    position: 'absolute',
   
   
    top: '103px',
    color: '#443c3c',
    fontSize: '20px'
  }}>

<BsBraces/>
</div>
<div style={{right: '-35px',
    position: 'absolute',
   
   
    top: '203px',
    color: '#443c3c',
    fontSize: '20px'
  }}>

<img style={{color:'red'}}
 src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjM3IDcxNyAxNC4zMDIgMTQuMjMyIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNDU0NTQ1O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNyA3MTcpIj48cGF0aCBjbGFzcz0iYSIgZD0iTTEuODQsMi45NDNhMC43MDcsMC43MDcsMCwwLDEsMS4yODItLjZMOS4xLDE1LjE2MmEwLjcwNywwLjcwNywwLDAsMS0xLjI4Mi42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNzczIC0xLjkzNykiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTkuMzU3LDkuNzg1QzkuMTYyLDkuNDQyLDUuNTUsMi4xLDUuNTUsMi4wNjJjMS4xMTQtLjEyMSw0LjA3OC0wLjEzNiw1LjM0OC42MjNhMzIuNDc1LDMyLjQ3NSwwLDAsMSw1Ljk1Ni4wNWMwLjQxNSwwLjA2NS40MzIsMC4yODcsMC4wNjksMC41QTM2LjUwNywzNi41MDcsMCwwLDAsOS4zNTcsOS43ODVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi44OCAtMS45NTUpIi8+PC9nPjwvc3ZnPg=="/>
</div>

    
    </div>
  )
}

export default BodyRight