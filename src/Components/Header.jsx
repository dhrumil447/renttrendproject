import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsArrowDownLeftCircle, BsCart3, BsSearch } from "react-icons/bs";
import { InputGroup } from 'react-bootstrap'
import { BiLogInCircle } from "react-icons/bi";
import { FaCircleUser, FaUser } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi"
import { NavLink, useNavigate } from 'react-router'
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cartSlice';
import { ShowOnLogin, ShowOnLogout } from './hiddenlinks';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';



function Header()  {
  const redirect =  useNavigate()
  const handleLogout = ()=>{
    if(sessionStorage.getItem("renttrend") != null){
      sessionStorage.removeItem("renttrend")
      toast.success("loggedout successfully")
      redirect('/') } }
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("renttrend") != null){
      let obj = JSON.parse(sessionStorage.getItem("renttrend"))
      setUsername(obj.username)
    }
  },[sessionStorage.getItem("renttrend")])
  const cartItems = useSelector(selectCart)
  return (
    <>
    <Navbar expand="md" style={{backgroundColor:"#"}}>
      <Container fluid>
        <Navbar.Brand href="#" className='fs-2 fw-bold ms-2' style={{color:'#5f1f43',fontFamily:"cursive",marginRight:"20px"}}>RentTrends</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link as={NavLink} to="/" style={{color:"black"}}>HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/Rentoutfits" style={{color:"black"}}>RENT OUTFITS</Nav.Link>
            <Nav.Link as={NavLink} to="/accessories" style={{color:"black"}}>ACCESSORIES</Nav.Link>
            <Nav.Link as={NavLink} to="/about" style={{color:"black"}}>ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="/contactUs" style={{color:"black"}}>CONTACTUS</Nav.Link>
          </Nav>

           {/* <Form inline>
              <InputGroup>
                <InputGroup.Text> <BsSearch />  </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" className="bg-dark text-white" 
                value={search} onChange={(e)=>setSearch(e.target.value)}/>
              </InputGroup>
            </Form> */}


            <Form inline>
            <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
               />
            <Button style={{backgroundColor:"#5f1f43",border:"1px solid #5f1f43"}}><BsSearch /></Button>
            </InputGroup>
            </Form>
    <Nav>
                <Nav.Link  as={NavLink} to="/cart">
              <div style={{position:'relative'}}>
                <BsCart3 style={{fontSize:"30px"}}/>
                <span class="badge rounded-pill text-bg" style={{position:'absolute',top:'-7px',right:'-15px',backgroundColor:"#5f1f43"}}>{cartItems.length}</span>
                
                </div>
                </Nav.Link>

            <ShowOnLogin>
            <FaCircleUser className='mt-1 ms-4' style={{fontSize:'35px'}}></FaCircleUser>
            <NavDropdown title={`WelCome ${username}`} id="navbarScrollingDropdown" style={{fontSize:"20px"}}>
              <NavDropdown.Item href="#action3"><FaUser/> My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/myorders">
                My Order
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Track Order
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3" onClick={handleLogout}><BiLogOutCircle style={{fontSize:"20px"}}/> LogOut</NavDropdown.Item>
            </NavDropdown>
            </ShowOnLogin>
            
            <ShowOnLogout>
            <Button as={NavLink} to="/Login" style={{fontSize:"20px", marginLeft:"20px" ,backgroundColor:"#5f1f43",border:"1px solid #5f1f43"}}><BiLogInCircle /> Login</Button>
            </ShowOnLogout>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </>
  );
}

export default Header