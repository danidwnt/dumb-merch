import React, { Component } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Card, Container, Col, Row } from 'react-bootstrap'
import ListProduct from './ListProduct'
import {Link} from 'react-router-dom'

// console.log(ListProduct)



export default class ListAndKey extends Component {
    render() {
        return (
            <div className='background-login' >
                <NavbarComponent />
                <Container className='py-5 mt-5'>
                <Link style={{textDecoration: 'none'}} to='/Detail-product'>
                    <Row>
                        <h3 className='header-product px-4'>Product</h3>
                        {ListProduct.map((product, index) =>(
                        
                        <Col sm={3} key={index}>
                            <Card className='shadow mb-3' style={{ marginTop: '40px', background: '#212121' }}>
                                <Card.Img style={{ height: '290px' }}  variant="top" src={product.image} />
                                <Card.Body >
                                    <Card.Title style={{
                                fontFamily: 'sans-serif',
                                fontstyle: 'normal',
                                fontWeight: '900',
                                fontSize: '18px',
                                lineheight: '25px',
                                color: '#F74D4D'
                            }}>{product.title}</Card.Title>
                                    
                                    <Card.Text style={{ color: 'white' }}>
                                        Rp.{product.price}
                                    </Card.Text>
                                    <Card.Text style={{ color: 'white' }}>
                                        Stock :{product.stock}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        ))}
                    </Row>
                    </Link>
                </Container>

            </div>
        )
    }
}
