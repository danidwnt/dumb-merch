import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div>
            <h3 className='header-product'>Product</h3>
            <Link to='/Detail-product'>
                <div className='container-product'>
                
                    <Card style={{ width: '18rem', height: '410px', background: '#212121' }}>
                        <Card.Img style={{ height: '290px' }} variant="top" src="assets/Rectangle4.png" />
                        <Card.Body>
                            <Card.Title style={{
                                fontFamily: 'sans-serif',
                                fontstyle: 'normal',
                                fontWeight: '900',
                                fontSize: '18px',
                                lineheight: '25px',
                                color: '#F74D4D'
                            }}>Mouse</Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                Rp.500.000
                            </Card.Text>
                            <Card.Text style={{ color: 'white' }}>
                                Stock : 600
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', height: '410px', marginLeft: '20px', background: '#212121' }}>
                        <Card.Img style={{ height: '290px' }} variant="top" src="assets/Rectangle5.png" />
                        <Card.Body>
                            <Card.Title style={{
                                fontFamily: 'sans-serif',
                                fontstyle: 'normal',
                                fontWeight: '900',
                                fontSize: '18px',
                                lineheight: '25px',
                                color: '#F74D4D',
                            }}>Keyboard</Card.Title>
                            <Card.Text style={{ color: 'white' }}>
                                Rp.500.000
                            </Card.Text>
                            <Card.Text style={{ color: 'white' }}>
                                Stock : 600
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
            </div>
            </Link>

        </div>
    )
}

export default Product
