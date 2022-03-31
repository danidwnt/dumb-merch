import React from 'react'

const FormRegister = () => {
    return (
        <div>
            <div className='container-form-login'>
                <form action="">
                    <h1 >Register</h1>
                    <input className='inp-name' type="text" />
                    <input className='inp-email' type="email" placeholder='Email' />
                    <input className='inp-password' type="password" placeholder='Password' />
                    <button className='btn-login-2'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default FormRegister