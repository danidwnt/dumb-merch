import React from 'react'
import {  Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavbarAdmin = () => {
    return (
        <div className='background-logi'>
            
                <Nav className="justify-content-end container py-4" style={{
                    background: '#0B0B0B', height: '85px'
                }}>
                    <img className='side-left-nav' src="assets/Frame.png" alt="" />

                    <Nav.Item >
                        <Nav.Link s>
                            <Link to='/complain-message' style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginTop: '10px', textDecoration: 'none'
                        }}>
                                Complain
                            </Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item >
                        <Nav.Link  >
                            <Link to='/category'style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginTop: '10px', textDecoration: 'none'
                        }}>
                                Category
                            </Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link >
                            <Link to='/product' style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginTop: '10px', textDecoration: 'none'
                        }}>
                        Product
                    </Link>
                    </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link  >
                            <Link to='/'style={{
                            color: 'white',
                            fontWeight: '600', fontSize: '18px', marginLeft: '10px', marginTop: '20px', textDecoration: 'none'
                        }}>
                                Logout
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            
        </div>

    )
}

export default NavbarAdmin
