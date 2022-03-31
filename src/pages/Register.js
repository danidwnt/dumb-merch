import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContentIndex from '../components/ContentIndex'
import Product from './Product'
import UserShop from './UserShop'



export default class Register extends Component {
    constructor (props){
       super(props)
        this.state = {
            isLogin : false,
            user: {
            fullname : "",
            email : "",
            password : ""
            },
        }
    }

    componentDidMount(){
        console.log('app component did mount');
    }

    componentDidUpdate(){
        console.log('app component did update');
        console.log(this.state)
    }

    handelOnChange = (e) => {
        const state = this.state
        this.setState({
            ...state,
            [e.target.name] : e.target.value
        })
        // console.log(state);
    }

    handelOnSubmit = (e) => {
        (e).preventDefault();
        const fullname = document.getElementsByName('fullname').value
        const email = document.getElementsByName('email').value
        const password = document.getElementsByName('password').value
        this.setState({
            isLogin : true,
            user : {
                fullname,
                email,
                password
            }
        })
        console.log(this.state);
    }
    
  render() {
    return (
      <div>
          {this.state.isLogin ? (
              <Product/>):(
                  
                  
        <div className='background-login'>
            <div className='content-login'>
                <ContentIndex />
                <div className='right-side-login'>
                    <div className='container-form-register'>
                        <form onSubmit={this.handelOnSubmit}>
                            <h1 >Register</h1>
                            <input className='inp-email'
                            onChange={this.handelOnChange}
                            value ={this.state.fullname}
                            name="fullname"
                            type="text" 
                            placeholder='Name' />
                            <input className='inp-password'
                            onChange={this.handelOnChange}
                            value ={this.state.email}
                            name='email'
                            type="email" 
                            placeholder='Email' />
                            <input className='inp-name' 
                            onChange={this.handelOnChange}
                            value ={this.state.password}
                            name='password'
                            type="password" placeholder='Password' />
                            {/* <Link to='/product'> */}
                            <button className='btn-register-2'>Register</button>
                            {/* </Link> */}
                            
                        </form>
                    </div>

                </div>
            </div>
            </div>
            )}
      </div>

              
    )
    
  }
}


