import React from 'react'
import { Link } from 'react-router-dom'

const ContentIndex = () => {
    return (
        <div>
           <div className='left-side-login'>
                    <img src="assets/Frame.png" alt="" />
                    <h1>Easy, Fast and Reliable</h1>
                    <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                    <Link to='/'>
                    <button className='btn-login'>Login</button>
                    </Link>
                    <Link to='/register'>
                    <a className='btn-register'>Register</a>
                    </Link>
                    
            </div>
        </div>
    )
}

export default ContentIndex
