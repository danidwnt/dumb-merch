import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'

const Profile = () => {
    return (
        <div className='background-login'>
            <NavbarComponent />
            <Container>
                <div className='profile-container'>


                    <Row >
                        <Col>
                            <h3>My Profile</h3>
                            <div className='flex'>

                                <img src="assets/Rectangle12.png" alt="" />
                                <div className='biodata'>
                                    <h4>Name</h4>
                                    <p>Yosep</p>

                                    <h4>Email</h4>
                                    <p>danideantara02@gmail.com</p>

                                    <h4>Phone</h4>
                                    <p>0896424242</p>

                                    <h4>Gender</h4>
                                    <p>Male</p>

                                    <h4>Address</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <h3>My Transaction</h3>
                            <div className='container-mytransaction'>
                                <div >
                                    <img className='img-mytans1' src="assets/Rectangle4.png" alt="" />
                                </div>
                                <div className='detail-transcation'>
                                    <h4>Mouse</h4>
                                    <p>Saturday, 14 Juli 2021</p>
                                    <p>Price : Rp.500.000</p>

                                    <h5>Sub Total : 500.000</h5>

                                </div>

                                <div>
                                    <Col>
                                    </Col>
                                    <img className='img-mytans2' src="assets/Frame.png" alt="" />

                                    <Link style={{textDecoration : 'none'}} to='/Feedback'>
                                        <Button style={style} className='btn-rating' variant='danger'> Nilai </Button>
                                    </Link>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    )
}


const style = {
    display: 'block',
    marginLeft: '190px',
    padding: '5px 20px'
}

export default Profile
