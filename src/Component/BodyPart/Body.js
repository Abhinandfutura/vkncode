import React from 'react'
import '../BodyPart/Body.css'
import dash from '../images/dash.jpg'
import tag from '../images/tag.jpg'
import bag from '../images/bag.jpg'
import card from '../images/card.jpg'
import box from '../images/box.jpg'
import users from '../images/users.jpg'
import report from '../images/report.jpg'
import calculator from '../images/calculator.jpg'
import {Link} from 'react-router-dom'
import whitemenu from '../images/whitemenu.jpg'
function Body() {
  return (
    <div className='bodyContainer'>
    <div className='body__left'>
    
      <div className='bodyLeft__container'>

      <div className='imageContainer'>

        <img className='dash' src={dash}/>
        <img className='dash' src={tag}/>
        <img className='dash' src={bag}/>
        <img className='dash' src={card}/>
        <img className='dash' src={box}/>
        <img className='dash' src={users}/>
        <img className='dash' src={report}/>
        <img className='dash' src={calculator}/>
        <img className='dash' src={whitemenu}/>
      </div>



      </div>
      <div className='menuText_container'>
      <div className='menuText'>
       
    <Link to='/' className='dashbord_text'>Dashbord</Link>
    <Link to='/' className='dashbord_text'>Sales</Link>
    <Link to='/'className='dashbord_text'>Purchase</Link>
    <Link to='/' className='dashbord_text'>Payments</Link>
    <Link to='/' className='dashbord_text'>Products</Link>
    <Link to='/' className='dashbord_text'>Contacts</Link>
    <Link to='/' className='dashbord_text'>Reports</Link>
    <Link to='/' className='dashbord_text'>Accounts</Link>
    <Link to='/' className='dashbord_text'>More</Link>
    </div>

</div>
    
      </div>
      <div className="bodyRight">
    

    <div className='priceChecker'>

      <div className='head'>
        <h4 className='priceChecker_text'>  Price Checker</h4>
        <span className='text-danger' style={{fontWeight:'600'}}>close</span>
      </div>
      <div className='priceChecker_body'>


        <div className='heading'>

         <h4 style={{marginTop:'40px',color:'blue'}}>3553453445</h4>
         <h4>Mozerella Cheese</h4>
         <p>(Item)</p>
        </div>

        <div className='price'>
         <h1 className='text-black'>Rs.120.00</h1> 

         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        
      </div>
    </div>
      </div>
      </div>
  )
}

export default Body