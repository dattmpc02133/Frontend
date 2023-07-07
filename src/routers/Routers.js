import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '~/admin/pages/Dashboard/Dashboard';
import ListProduct from '~/admin/pages/Products/ListProduct';
import ProductDetail from '~/pages/ProductDetail';
import Shops from '~/pages/Shops';
import Layout from '~/components/Layout/Layout';
const ProvideRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'shops',
                element: <Shops />,
            },
            {
                path: 'productDetail',
                element: <ProductDetail />,
            },
        ],
    },
    {
        path: '/admin',
        element: <Dashboard />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'listProduct',
                element: <ListProduct />,
            },
        ],
    },
]);

export { ProvideRouter };
