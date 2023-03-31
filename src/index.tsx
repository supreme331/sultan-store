import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {HashRouter} from "react-router-dom";
import './styles/index.scss';

const store = setupStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // Для роутинга использую HashRouter, т.к. приложение хостится на GitHub-Pages, который не умеет определять
    // точку входа в приложение, при обращении к любому адресу отличающемуся от корневого отдаст 404.
    // На нормальном хостинге необходимо использовать BrowserRouter.
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
);
