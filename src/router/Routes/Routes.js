import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Home from '../../pages/Home/Home/Home';
import Register from '../../pages/Login/Register';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../../shared/Footer/Footer';
import Chefs from '../../pages/Home/Chefs/Chefs';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import Chef from '../../pages/Home/Chefs/Chef';
import VeiwDetails from '../../pages/ViewDetails/VeiwDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef',
                element: <Chefs></Chefs>
            },
            {
                path: '/chefDetails/:id',
                element: <PrivateRoute><VeiwDetails></VeiwDetails></PrivateRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'footer',
                element: <Footer></Footer>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    },
]);

export default router;

