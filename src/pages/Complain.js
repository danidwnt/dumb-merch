import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

const Complain = () => {
  return (
    <div className='background-page'>
      <NavbarComponent />
      <div className="display-flex-complain">
          <div className="side-left-complain">
                <img src="assets/Ellipse1.png" alt="" />
                <h6>Admin</h6>
                <p>Yes, Is there anything I can help</p>
          </div>
          <div className="side-right-complain">
                <p className='massage-admin'>Yes, Is there anyting I can help ?</p>
                <img className='chat-1' src="assets/Ellipse1.png" alt="" />
                <p className='message-user'>Hello Admin, I Need Your Help</p>
                <input type="text" placeholder='Send Message' />
          </div>
      </div>
    </div>
  )
}

export default Complain
