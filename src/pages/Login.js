import React, { Component } from 'react'
import '../style.css'
import ContentIndex from '../components/ContentIndex'
import { Link } from 'react-router-dom'
import UserShop from './UserShop'
import ListAndKey from '../datadummy/ListAndKey'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            user: {
                email: "",
                password: ""
            },
        }
    }
    componentDidMount() {
        console.log('app component did mount');
    }

    componentDidUpdate() {
        console.log('app component did update');
        console.log(this.state)
    }

    handelOnChange = (e) => {
        const state = this.state
        this.setState({
            ...state,
            [e.target.name]: e.target.value
        })
        // console.log(state);
    }

    handelOnSubmit = (e) => {
        e.preventDefault();

        const email = document.getElementsByName('email').value
        const password = document.getElementsByName('password').value
        this.setState({
            isLogin: true,
            user: {
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
                    <ListAndKey/>) : (
                    <div className='background-login'>
                        <div className='content-login'>
                            <ContentIndex />
                            <div className='right-side-login'>
                                <div className='container-form-login'>
                                    <form onSubmit={this.handelOnSubmit}>
                                        <h1 >Login</h1>
                                        <input
                                        onChange={this.handelOnChange}
                                        value ={this.state.email}

                                            className='inp-email'
                                            name="email" type="email"
                                            placeholder='Email' />
                                        <input
                                            onChange={this.handelOnChange}
                                            value ={this.state.password}
                                            className='inp-password'
                                            name='password'
                                            type="password"
                                            placeholder='Password' />
                                        {/* <Link to='/User-shop'> */}
                                            <button className='btn-login-2'>Login</button>
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




// const Login = () => {

//     const [state, setState] = useState({
//         email: "",
//         password: ""
//     })

//     const handleOnChange = (e) => {
//         console.log(`${e.target.name}: ${e.target.value}`);
//         setState({
//             ...state,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         //print state value with console.log here
//         console.log(state);
//         // console.log(e);
//     };
//     return (
//         <div className='background-login'>
//             <div className='content-login'>
//                 <ContentIndex />
//                 <div className='right-side-login'>
//                     <div className='container-form-login'>
//                         <form onSubmit={handleOnSubmit}>
//                             <h1 >Login</h1>
//                             <input
//                                 onChange={handleOnChange}
//                                 value={state.email}
//                                 className='inp-email'
//                                 name="email" type="email"
//                                 placeholder='Email' />
//                             <input
//                                 onChange={handleOnChange}
//                                 value={state.password}
//                                 className='inp-password'
//                                 name='password'
//                                 type="password"
//                                 placeholder='Password' />
//                             <Link to='/User-shop'>
//                                 <button className='btn-login-2'>Login</button>
//                             </Link>

//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Login
