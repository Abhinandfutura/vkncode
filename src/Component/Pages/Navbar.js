import React from 'react'
import './Navbar.css'
import {Nav,Container,Navbar} from 'react-bootstrap'
import message from'../images/message.jpg'
import notification from '../images/notification.jpg'
import menuRight from '../images/menuRight.jpg'
import userimg  from '../images/userimg.jpg'
import logo from '../images/logo.jpg'
import user2 from '../images/user2.jpg'
import arrow from '../images/arrow.jpg'
import squaremenu from '../images/squaremenu.jpg'
function navbar() {
  return (
    <div >


  <Navbar variant="dark" >
    <div style={{display:'flex',justifyContent:'space-between',width:'100%',position:'fixed',top:'0',height:'48px'}}>
    <Navbar.Brand>
      <div className='logo'>
        <img
      style={{height:'43px',padding:'3px'}}
      src={logo}/>
      
      </div>

      </Navbar.Brand>
    <Nav.Link  className=' nav__left ' style={{marginRight:'auto'}}>
    <div  className='nav__leftItem' >
      <div  style={{display:'flex',alignItems:'center'}}>
      <Nav.Link  className='nav__right'><img  style={{width:'32px', height: '31px',padding:'3px'}}src={user2}/></Nav.Link>
      <Nav.Link  className='nav__right'><p className='username' style={{marginLeft:'-24px',fontWeight:'800'}}>Savad farooque</p></Nav.Link>
      </div>
      <div style={{display:'flex',alignItems:'center'}}>

        <div className='arrowContainer'>


      <Nav.Link  className='nav__right'><img style={{height:'5px'}} src={arrow}/></Nav.Link>
      </div>
      <div className='quickContainer'>
      <Nav.Link  className='nav__right'><img  style={{height: '31px',padding:'6px'}}src={squaremenu}/></Nav.Link>
      <Nav.Link  className='nav__right'><p className='username' style={{marginLeft:'-31px',fontWeight:'500'}}>Quick Menu</p></Nav.Link>


      </div>
      </div>
      </div>
      
      </Nav.Link>


    <Nav className="ml-auto topRight">
      <Nav.Link className='nav__right  ' style={{paddingLeft:'11px'}}>
        <div class='times'>
        <p className='ten'>10:10 AM</p>
        <p className='date'>11/25/2020</p>
        </div></Nav.Link>
        <div style={{display:'flex',alignItems:'center'}}>
      <Nav.Link  className='nav__right'><img  style={{width:'32px', height: '31px',padding:'3px'}}src={message}/></Nav.Link>
      <Nav.Link  className='nav__right'><img  style={{width:'32px', height: '31px',padding:'3px'}}src={notification}/></Nav.Link>
      <Nav.Link  className='nav__right'><p className='username'>Savad farooque</p></Nav.Link>
      <Nav.Link  className='nav__right'><img  style={{height: '31px',padding:'3px'}}src={userimg}/></Nav.Link>
      <Nav.Link  className='nav__right'><img  style={{height: '31px',padding:'3px'}}src={menuRight}/></Nav.Link>
      </div>
    
    </Nav>
    </div>
  </Navbar>


    </div>
  )
}

export default navbar