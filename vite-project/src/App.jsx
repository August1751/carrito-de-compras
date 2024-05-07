import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
} from 'react-router-dom';

import { Login } from './pages/login/login'
import { ShopCar } from './pages/shp-car/Shop-car'
import { NoFound } from './pages/no-found/NoFound';
import { useEffect, useState } from 'react';

export const App = () => {

    const [isLogin, setIsLogin] = useState(false)
    const parametros = useParams()

    useEffect(() => {
        console.log(parametros);
    }, [])



    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login info={'info'}/>}/>
                <Route path="/shop" element={<ShopCar/>}/>
                <Route path="*" element={<NoFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}