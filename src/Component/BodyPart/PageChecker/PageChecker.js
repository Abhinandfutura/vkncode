import React from 'react'
import Navbar from '../../Pages/Navbar'
import '../Body.css'
import dash from '../../images/dash.jpg'
import tag from '../../images/tag.jpg'
import bag from '../../images/bag.jpg'
import card from '../../images/card.jpg'
import box from '../../images/box.jpg'
import users from '../../images/users.jpg'
import report from '../../images/report.jpg'
import calculator from '../../images/calculator.jpg'
import '../PageChecker/PriceChecker.css'

import whitemenu from '../../images/whitemenu.jpg'

function PageChecker() {
  return (
    <div>
        <Navbar/>

        


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
       
    <p className='dashbord_text'>Dashbord</p>
    <p className='dashbord_text'>Sales</p>
    <p className='dashbord_text'>Purchase</p>
    <p className='dashbord_text'>Payments</p>
    <p className='dashbord_text'>Products</p>
    <p className='dashbord_text'>Contacts</p>
    <p className='dashbord_text'>Reports</p>
    <p className='dashbord_text'>Accounts</p>
    <p className='dashbord_text'>More</p>
    </div>

</div>
    
      </div>
      <div className="bodyRight">
    

    <div className='priceChecker'>

      <div className='head'>
        <h4 className='priceChecker_text'>  Price Checker</h4>
        <span className='text-danger' style={{fontWeight:'600'}}>close</span>
      </div>
      <div className='SearchText__container'>


        <div className='SearchText'>

         
         <h4 style={{textAlign:'center',  width:'54%'}}>Search for Item price & Details</h4>
         <input typr='text' placeholder='Barcode' className='barcode'/>
         
         <button className='checkPrice_btn'>Check Price</button>
        </div>

      
      </div>
    </div>
      </div>
      </div>

    </div>
  )
}

export default PageChecker