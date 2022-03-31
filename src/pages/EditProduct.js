import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { Col, Container, Row, Button, Form } from 'react-bootstrap'


const EditProduct = () => {
  return (
    <div className='background-login'>
      <NavbarAdmin />
      <Container className='py-1'>
        <Row>
          <Col className='py-5'>
            <h3 className='text-white mb-5'>Edit Poduct</h3>
            <div className='flex mb-3 text-white'>
              <Button variant='danger'>Upload Image</Button>
              <p>Mouse.png</p>
            </div>

            <Form>
              <Form.Control className='mb-4 bg-dark' type="text" placeholder="Product" />

              <Form.Control className='mb-4 bg-dark' as="textarea" rows={3} placeholder="description" />

              <Form.Control className='mb-4 bg-dark' type="number" placeholder="Price" />
              <Form.Control className='mb-5 bg-dark' type="number" placeholder="Stock" />
              <Row className='px-2 mt-5'>
                <Button  variant="success" type="submit">
                  Save
                </Button>
              </Row>

            </Form>

          </Col>
        </Row>
      </Container >
    </div>
  )
}

export default EditProduct
