import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'

const ComplainMassage = () => {
  return (
    <div className='background-page'>
      <NavbarAdmin />
      <div className="display-flex-complain">
          <div className="side-left-complain">
            
              <img src="assets/Ellipse3.png" alt="" />
                <h6>egi_lol</h6>
                <p>Yes, Is there anything I can help</p>
            
                <div className="side-left-complain-admin">
                <img src="assets/Ellipse2.png" alt="" />
                    <h6>Admin</h6>
                    <p>Yes, Is there anything I can help</p>
              </div>
                
          </div>
          
          
          <div className="side-right-complain">
                <p className='massage-admin'>Yes, Is there anyting I can help ?</p>
                <img className='chat-1' src="assets/Ellipse3.png" alt="" />
                
                <input type="text" placeholder='Send Message' />
            </div>
            </div>
    </div>
  )
}

export default ComplainMassage
