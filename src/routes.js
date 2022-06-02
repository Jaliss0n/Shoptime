import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pags/authentication/login/login';
import Register from "./pags/authentication/register/register";
import Home from './pags/home/home';
import Produtos from '../src/pags/produtos/produtos';
import Register_products from './pags/register_products/register_products';


export default function Navigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/produtos' element={<Produtos/>}/>
                <Route path='/home/register_products' element={<Register_products/>}/>
            </Routes>
        </BrowserRouter>
    )
}