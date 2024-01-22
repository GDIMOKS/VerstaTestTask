import React from 'react';
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import AddOrderPage from "./pages/AddOrderPage";
import NotFound from "./pages/NotFound";

const AppRoutes = [
    {
        path: '/',
        element: <MainPage />
    },
    {
        path: '/order',
        element: <OrderPage />
    },
    {
        path: '/addorder',
        element: <AddOrderPage />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default AppRoutes;