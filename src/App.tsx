import React, {useEffect} from 'react';
import './styles/App.module.scss';
import styles from './styles/App.module.scss';
import {useAppDispatch} from './store/hooks/redux';
import CatalogPage from "./Pages/CatalogPage";
import Header from "./Components/Header";
import {Route, Routes} from 'react-router-dom';
import ProductPage from "./Pages/ProductPage";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import {initializeApp} from "./store/reducers/CatalogSlice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(initializeApp());
    }, [])

    return (
        <div className={styles.App}>
            <Header/>
            <Routes>
                <Route path='/' element={<CatalogPage/>}/>
                <Route path='/catalog/:currentPage' element={<CatalogPage/>}/>
                <Route path='/products/:id' element={<ProductPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
