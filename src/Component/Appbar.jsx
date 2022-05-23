import React from 'react'
import {Nav,Form,Container,Navbar,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Appbar() {
     
  return (
    <div id='box1'>
<Navbar bg="dark" expand="lg" variant='dark'>
  <Container fluid>
    <Navbar.Brand href="#">Netflix-Mini❤</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
         >
        <Nav.Link href="#action1"><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
      </Nav>
      
          <Link to="/"  className='btn btn-danger'>Log-out</Link>
               <Link  to="/login" className='btn btn-danger'>Log-in</Link>
      

      {/* <button className='btn btn-danger'>Log-In</button>
      <button className='btn btn-danger'>Log-out</button> */}

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Appbar