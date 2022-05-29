import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from "./pags/authentication/register/register";


export default function Navigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}