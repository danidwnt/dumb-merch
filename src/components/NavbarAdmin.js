import React from 'react'
import { Container, Nav } from 'react-bootstrap'


const NavbarAdmin = () => {
    return (
        <div className='background-logi'>
            <Container>
                <Nav className="justify-content-end" style={{
                    background: '#0B0B0B', height: '85px'
                }}>
                    <img className='side-left-nav' src="assets/Frame.png" alt="" />

                    <Nav.Item >
                        <Nav.Link style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginTop: '20px'
                        }} href="/complain-message">Complain</Nav.Link>
                    </Nav.Item>

                    <Nav.Item >
                        <Nav.Link style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginTop: '20px'
                        }} href="/category">Category</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginLeft: '10px', marginTop: '20px'
                        }} href='/product'>Product</Nav.Link>
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

export default NavbarAdmin
