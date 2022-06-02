import React from 'react'
import BodyLeft from './BodyLeft/BodyLeft'
import './Body.css'
import BodyRight from './BodyRight/BodyRight'
function Body() {
  return (
    <div style={{display:'flex'}}>

<div className='body__left'>

<BodyLeft/>
</div>

<div className='body__right'>

<BodyRight/>
</div>


    </div>
  )
}

export default Body