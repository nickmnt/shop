import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Categories from './Categories';
import CategoryPage from './CategoryPage';
import { useCallback, useEffect, useState } from 'react';
import { fetchCurrentUser } from './features/user/userSlice';
import { useAppDispatch } from './app/hooks';
import Home from './Home';
import LoginDialog from './dialogs/LoginDialog';
import RegisterDialog from './dialogs/RegisterDialog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Catalog from './features/catalog/Catalog';
import ProductDetails from './features/catalog/ProductDetails';
import { fetchBasketAsync } from './features/basket/basketSlice';
import BasketPage from './features/basket/BasketPage';
import NavBar from './features/layout/NavBar';
import BottomNav from './BottomNav';
import CheckoutWrapper from './features/checkout/CheckoutWrapper';
import Orders from './features/orders/Orders';
import Inventory from './features/admin/Inventory';
import ProtectedAdminRoute from './app/common/ProtectedAdminRoute';
import ProtectedRoute from './app/common/ProtectedRoute';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

function App() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);
    const mode = 'dark';
    let theme = React.useMemo(
        () =>
            createTheme({
                typography: {
                    // In Japanese the characters are usually larger.
                    htmlFontSize: 10,
                    fontFamily: [
                        'Roboto',
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"'
                    ].join(',')
                },
                palette: {
                    mode,
                    primary: {
                        light: '#bb86fc',
                        main: '#6200ee',
                        dark: '#3700b3'
                    },
                    secondary: {
                        light: '#ffcbbd',
                        main: '#e69a8d',
                        dark: '#b26b60'
                    }
                }
            }),
        [mode]
    );

    theme = responsiveFontSizes(theme);

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser());
            await dispatch(fetchBasketAsync());
        } catch (error) {
            console.log(error);
        }
    }, [dispatch]);

    useEffect(() => {
        initApp().then(() => setLoading(false));
    }, [initApp]);

    if (loading) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="baseSettings" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/category/:catId" element={<CategoryPage />} />
                            <Route path="/catalog" element={<Catalog />} />
                            <Route path="/catalog/:id" element={<ProductDetails />} />
                            <Route path="/basket" element={<BasketPage />} />
                            <Route
                                path="/checkout"
                                element={
                                    <ProtectedRoute>
                                        <CheckoutWrapper />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/orders"
                                element={
                                    <ProtectedRoute>
                                        <Orders />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path="/admin"
                                element={
                                    <ProtectedAdminRoute>
                                        <Inventory />
                                    </ProtectedAdminRoute>
                                }
                            />
                        </Route>
                    </Routes>
                    <BottomNav value={0} />
                </BrowserRouter>
                <LoginDialog />
                <RegisterDialog />
                <ToastContainer position="bottom-right" />
            </div>
        </ThemeProvider>
    );
}

export default App;
