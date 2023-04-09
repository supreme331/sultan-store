import React, {useEffect} from 'react';
import './styles/App.module.scss';
import styles from './styles/App.module.scss';
import {useAppDispatch, useAppSelector} from './store/hooks/redux';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {initializeApp} from "./store/reducers/CatalogSlice";
import Loader from "./Components/Loader";
import {getIsInitialization} from "./store/reducers/selectors/getIsInitialization";
import AppRouter from "./Components/AppRouter";

function App() {
    const dispatch = useAppDispatch();
    const isInitialization = useAppSelector(getIsInitialization);

    useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])

    return (
        <div className={styles.App}>
            {
                isInitialization ? <Loader/>
                    : (
                        <>
                            <Header/>
                            <AppRouter/>
                            <Footer/>
                        </>
                    )}
        </div>
    );
}

export default App;
