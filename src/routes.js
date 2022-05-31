import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pags/authentication/login/login';
import Register from "./pags/authentication/register/register";
import Home from './pags/home/home';
import Produtos from '../src/pags/produtos/produtos';


export default function Navigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/produtos' element={<Produtos/>}/>
            </Routes>
        </BrowserRouter>
    )
}