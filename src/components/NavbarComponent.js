import React from 'react'
import {  Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavbarComponent = () => {
    return (
        <div className='background-logi'>
            
                <Nav className="justify-content-end container py-3" style={{
                    background: '#0B0B0B', height: '85px'
                }}>
                    <Link to="/user-shop">
                        <img className='side-left-nav' src="assets/Frame.png" alt="" />
                    </Link>


                    <Nav.Item >

                        <Nav.Link> 
                                <Link to="/complain"
                                style={{
                                    color: 'white',
                                    fontWeight: '600', 
                                    fontSize: '18px', 
                                    marginTop: '20px',
                                    textDecoration: 'none',
                                }}>
                                     Complain
                                </Link>
                        </Nav.Link>


                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link >
                            <Link to='/profile'
                            style={{
                                color: 'white',
                                fontWeight: '600', 
                                fontSize: '18px', 
                                marginLeft: '10px', 
                                marginTop: '20px',
                                textDecoration: 'none'
                            }}>
                                Profile
                            </Link></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link >
                            <Link to='/'
                            style={{
                                color: 'white',
                                fontWeight: '600', 
                                fontSize: '18px', 
                                marginLeft: '10px', 
                                marginTop: '20px',
                                textDecoration: 'none'
                            }}>
                                Logout
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            
        </div>

    )
}

export default NavbarComponent
