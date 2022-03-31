import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarAdmin from '../components/NavbarAdmin'

const EditCategory = () => {
    return (
        <div className='background-page'>
            <NavbarAdmin />
            <Container>
                <div className='form-group-edit-product'>
                    <form>
                        <h3>Edit Category</h3>
                        <input type="text" />
                        <button>Save</button>
                    </form>
                </div>
            </Container >
        </div>
    )
}

export default EditCategory
