import React from 'react';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register';
import UserShop from './pages/UserShop';
import DetailProduct from './pages/DetailProduct';
import Profile from './pages/Profile';
import Complain from './pages/Complain';
import Category from './pages/Category';
import Product from './pages/Product';
import ComplainMassage from './pages/ComplainMassage';
import EditCategory from './pages/EditCategory';
import EditProduct from './pages/EditProduct';
import UserShops from './components/UserShops';
import PrivateRoute from './components/PrivatePages';
import Rating from './pages/Rating';

function App() {
  return (
   
      <Router>
            <Routes>
                    <Route exact path='/' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>

                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/user-shop' element={<UserShops/>}/>
                    <Route exact path='/detail-product' element={<DetailProduct/>}/>
                    <Route exact path='/profile' element={<Profile/>}/>
                    <Route exact path='/complain' element={<Complain/>}/>
                    <Route exact path='/category' element={<Category/>}/>  
                    <Route exact path='/product' element={<Product/>}/>
                    <Route exact path='/complain-message' element={<ComplainMassage/>}/>
                    <Route exact path='/edit-category' element={<EditCategory/>}/>
                    <Route exact path='/edit-product' element={<EditProduct/>}/>
                    <Route exact path='/Feedback' element={<Rating/>}/>
                </Route>
            </Routes>
      </Router>

    
  );
}

export default App;
