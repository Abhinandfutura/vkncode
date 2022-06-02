import React from 'react'
import {BsPinAngle} from 'react-icons/bs'
import './BodyRight.css'
import {TiMessages} from 'react-icons/ti'
function BodyRight() {
  return (
      <div >
    <div   style={{display: 'flex',
    flexDirection: 'column',
    border: '1px solid #00000040',
   
    height: '100%'}} >
        <div  className='textBox'
          >
        <input type='text' placeholder='Make a comment'  className='inputBox1'
         />
      

        </div>
        <BsPinAngle style={{fontSize:'20px'}} className='pin'/>

<div className='Buttons'>
    <button className='Btn cancelBtn'>Cancel</button>
    <button className='Btn'>Submit</button>
</div>
<hr style={{fontSize:'1px',marginTop:'10px'
,width:'361px'
,


borderBottom:'1px solid #0000001c'}} />
<div className='message'>
<TiMessages   className='messageIc' style={{position:'relative'}}/>
<h4 >No comments__yet</h4>
<div style={{width:'341px'}}>
<p>Give feedback, ask questions, or start a discussion in the comments.</p>
</div>

</div>


    </div>
    

    
    </div>
  )
}

export default BodyRight