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

function App() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    const initApp = useCallback(async () => {
        try {
            await dispatch(fetchCurrentUser());
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
        <div className="baseSettings" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/category/:catId" element={<CategoryPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <LoginDialog />
            <RegisterDialog />
            <ToastContainer position="bottom-right" />
        </div>
    );
}

export default App;
