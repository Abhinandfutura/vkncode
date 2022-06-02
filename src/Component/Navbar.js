
import React from 'react'
import {Nav,NavDropdown,Container,Navbar} from 'react-bootstrap'
import {IoGrid} from 'react-icons/io5'
import {FaGreaterThan} from 'react-icons/fa'
import {AiOutlineArrowsAlt,AiFillQuestionCircle} from 'react-icons/ai'
import './Navbar.css'
function navbar() {
  return (
    <div className='navContaine'>

      <div className='nav__left'>

      <div  className='left__container'  >
       <h6  className='grid1' >  <IoGrid /> </h6>
      <h6 style={{marginLeft:'20px' ,fontSize:'16px',  marginTop: '32px'}}>Mechine test</h6>
      
      <h6 className='grid1'  style={{ fontWeight: '200',color:' #00000063',
      marginLeft:'10px',marginRight:'10px',fontSize:' smaller'}}> <FaGreaterThan/></h6> 
      <h6 className='text'  style={{color:"rgb(64 57 57)",fontSize:'16px', marginTop: '32px'}}>Price Checker</h6></div>
 
      
      

      </div>

      <div className='nav__right'>
        <select className='select'>
          <option>Default</option>
          <option>25%</option>
          <option>50%</option>
          <option>75%</option>
          <option>100%%</option>
          <option>150%</option>
          <option>200%</option>
        </select>

        <h6 className='grid1 arrow'><AiOutlineArrowsAlt/></h6>
        <h6 className='grid1'> <AiFillQuestionCircle/></h6>
<h6 class='signIn'>Sign in</h6>

      </div>
      </div>

/* 

<Navbar collapseOnSelect expand="lg" variant="dark" className='navContainer'>
  <Container>
  <Navbar.Brand href="#home">
  <p  className='text' style={{marginLeft:'0'}} > <IoGrid  />  </p>
 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><p  className='text'>Mechine test</p></Nav.Link>
      <Nav.Link>
      <p  className='text' style={{ color:'#0000004d'}} > <FaGreaterThan/></p>
        </Nav.Link>
      <Nav.Link  className='text'>
      <p className='text'>Price Checker</p>
        </Nav.Link>
     
    </Nav>
    <Nav>
    <div className='navRight'>
      
      <Nav.Link>
  <select className='select'>
          <option>Default</option>
          <option>25%</option>
          <option>50%</option>
          <option>75%</option>
          <option>100%</option>
          <option>150%</option>
          <option>200%</option>

        </select>
      </Nav.Link>
      <Nav.Link >
        

        <p className='text'><AiOutlineArrowsAlt/></p>
      </Nav.Link>
      <Nav.Link >
        

      <p className='text'> <AiFillQuestionCircle/></p>
      </Nav.Link>
      <Nav.Link >
        
<span  className='text' style={{fontSize:'18px', fontWeight:'500'}}>Sign in</span>
      </Nav.Link>
      </div>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div> */
  )
}

export default navbar