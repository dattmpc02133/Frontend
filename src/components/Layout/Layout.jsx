import React from 'react';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';
import Routers from '~/routers/Routers';
import Sidebar from '~/components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import '~/styles/app.css';
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"></link>;
function Layout() {
    // const location = useLocation();
    return (
        <>
            <Header />
        </>
    );
}

export default Layout;
