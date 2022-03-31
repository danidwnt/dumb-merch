import React, { useState } from 'react'
import { Button, Container, Table, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarAdmin from '../components/NavbarAdmin'

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

const Category = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='background-page'>

            <NavbarAdmin />
            <Container>
                <div className='group-category'>
                    <h3>List Category</h3>
                    <Table striped hover variant="dark">
                        <thead>
                            <tr >
                                <th className="col-4">No</th>
                                <th className="col-5" >Catagory Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mouse</td>
                                <td>
                                    <Button style={btnDelate} variant="success" onClick={handleShow}>Delate</Button>
                                
                                    <Link to='/edit-category'>
                                        <Button style={style} variant="danger">Edit</Button>
                                    </Link>
                                </td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Keyboard</td>
                                <td>
                                    <Button style={btnDelate} variant="success">Delate</Button>
                                    <Button style={style} variant="danger">Edit</Button>
                                </td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bag</td>
                                <td>
                                    <Button style={btnDelate} variant="success">Delate</Button>
                                    <Button style={style} variant="danger">Edit</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Stationary</td>
                                <td>
                                    <Button style={btnDelate} variant="success">Delate</Button>
                                    <Button style={style} variant="danger">Edit</Button>
                                </td>

                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Doll</td>
                                <td>
                                    <Button style={btnDelate} variant="success">Delate</Button>
                                    <Button style={style} variant="danger">Edit</Button>
                                </td>

                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Pillow</td>
                                <td>
                                    <Button style={btnDelate} variant="success">Delate</Button>
                                    <Button style={style} variant="danger">Edit</Button>
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

export default Category
