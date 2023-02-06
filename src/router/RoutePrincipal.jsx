import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';

import Home from '../components/Home';

import Error from '../components/Error';
import NavBar from '../components/NavBar';
import Price from '../components/Price';
import Product from '../components/Product';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Knife from '../components/Knife';


export const RoutesPrincipal = () => {
    return ( 
        <BrowserRouter>
        <NavBar/>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/precios' element={<Price/>} />
                <Route path='/productos' element={<Product/>} />
                <Route path='/galeria' element={<Gallery/>} />
                <Route path='/product' element={<Knife/>} />
                <Route path='/contacto' element={<Contact/>} />
                
                <Route path='*' element={<Error/>} />
            </Routes>
        
        </BrowserRouter>
     );
}
 
export default RoutesPrincipal;