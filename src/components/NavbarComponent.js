import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavbarComponent = () => {
    return (
        <div className='background-logi'>
            <Container>
                <Nav className="justify-content-end" style={{
                            background: '#0B0B0B', height:'85px'}}>
                    <Link to = "/user-shop">
                    <img className='side-left-nav' src="assets/Frame.png" alt="" />
                    </Link>
                    
                    
                    <Nav.Item >
                        <Nav.Link style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginTop: '20px'
                        }} href="/complain">Complain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginLeft: '10px', marginTop: '20px'
                        }} href='/profile'>Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginLeft: '10px', marginTop: '20px'
                        }} href='/'>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </div>

    )
}

export default NavbarComponent
