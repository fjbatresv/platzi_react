import React from 'react';
import Footer from './Footer/Footer';
import '../assets/styles/App.scss';

const Layout = ({ children }) => {
    return (
        <div className="app">
            {children}
            <Footer />
        </div>
    );
};

export default Layout;