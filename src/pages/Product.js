import React, { useState } from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import { Container, Table, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const style = {
  padding: '5px 30px 5px 30px',
  marginLeft: '5px',
}

const btnDelate = {
  padding: '5px 20px 5px 20px'
}

const styleModal = {

  title: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '26px',
    lineHeight: '36px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '30px 0px 0px 30px',
    color: '#000000'
  },
  body: {
    margin: '0px 0px 0px 19px',
    fontSize: '18px',
  },
  btnNo: {
    padding: '6px 30px 6px 30px'
  },
  btnYes: {
    padding: '6px 29px 6px 29px'
  }

}

const Product = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='background-page'>
      <NavbarAdmin />
      <Container>
        <div className='group-category'>
          <h3>List Product</h3>
          <Table striped hover variant="dark">
            <thead>
              <tr>
                <th>No</th>
                <th className="col-2">Photo</th>
                <th className="col-2">Product Name</th>
                <th className="col-3">Product Decs</th>
                <th className="col-1">Price</th>
                <th className="col-1">Qty</th>
                <th className="col-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mouse.jpg</td>
                <td>Mouse</td>
                <td>lorem ipsum Mouse...</td>
                <td>500.000</td>
                <td>600</td>
                <td>

                  <Button style={btnDelate} variant="success" onClick={handleShow}>Delate</Button>

                  <Link to='/edit-product'>
                    <Button style={style} variant="danger">Edit</Button>
                  </Link>

                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Keyboard.png</td>
                <td>Keyboard</td>
                <td>Lorem ipsum Keyboard...</td>
                <td>300.000</td>
                <td>500</td>
                <td>
                  <td>
                    <Button style={btnDelate} variant="success" onClick={handleShow}>Delate</Button>

                    <Link to='/edit-product'>
                      <Button style={style} variant="danger">Edit</Button>
                    </Link>
                  </td>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Bag.png</td>
                <td>Bag</td>
                <td>Lorem ipsum Bag...</td>
                <td>700.000</td>
                <td>810</td>
                <td>
                  <td>
                    <Button style={btnDelate} variant="success" onClick={handleShow}>Delate</Button>

                    <Link to='/edit-product'>
                      <Button style={style} variant="danger">Edit</Button>
                    </Link>
                  </td>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Stationary.png</td>
                <td>Stationary</td>
                <td>Lorem ipsum Stationary...</td>
                <td>600.000</td>
                <td>400</td>
                <td>
                  <td>
                    <Button style={btnDelate} variant="success">Delate</Button>
                    <Button style={style} variant="danger">Edit</Button>
                  </td>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Doll.png</td>
                <td>Doll</td>
                <td>Lorem ipsum Doll...</td>
                <td>650.000</td>
                <td>200</td>
                <td>
                  <td>
                    <Button style={btnDelate} variant="success">Delate</Button>
                    <Button style={style} variant="danger">Edit</Button>
                  </td>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Pillow.padding</td>
                <td>Pillow</td>
                <td>Lorem ipsum Pillow...</td>
                <td>450.000</td>
                <td>500</td>
                <td>
                  <td>
                    <Button style={btnDelate} variant="success">Delate</Button>
                    <Button style={style} variant="danger">Edit</Button>
                  </td>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>


        <Modal.Title style={styleModal.title}>Delete Data</Modal.Title>

        <Modal.Body style={styleModal.body}>Are you sure you want to delete this data?</Modal.Body>
        <Modal.Footer>
          <Button style={styleModal.btnYes} variant="success" onClick={handleClose}>
            Yes
          </Button>
          <Button style={styleModal.btnNo} variant="danger" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
}

export default Product
