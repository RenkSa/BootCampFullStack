import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Routes from './Routes';

const App = (props) => {
    return (
        <BrowserRouter>
            <Header />

            <Routes />

            <Footer />
        </BrowserRouter>
    );
}

export default App;
