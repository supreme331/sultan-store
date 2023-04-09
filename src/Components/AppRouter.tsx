import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from "../Pages/CatalogPage";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import AdminPanelPage from "../Pages/AdminPanelPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<CatalogPage/>}/>
            <Route path='/catalog/:currentPage' element={<CatalogPage/>}/>
            <Route path='/products/:id' element={<ProductPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/app-admin' element={<AdminPanelPage/>}/>
        </Routes>
    );
};

export default AppRouter;