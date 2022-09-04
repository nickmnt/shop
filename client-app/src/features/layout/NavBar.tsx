import Typography from '@mui/material/Typography/Typography';
import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import ShopIcon from '@mui/icons-material/Shop';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { setLoginOpen, setRegisterOpen } from '../../features/dialog/dialogSlice';
import { signOut } from '../../features/user/userSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function NavBar() {
    const user = useAppSelector((x) => x.user);
    const dispatch = useAppDispatch();

    return (
        <AppBar position="fixed" sx={{ bgcolor: 'black' }}>
            <Toolbar variant="dense">
                <Button
                    sx={{
                        my: 2,
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    component={Link}
                    to="/"
                >
                    <ShopIcon sx={{ marginRight: '1rem' }} />
                    <Typography variant="h6" className="navBar__header" component="div">
                        ReactStore
                    </Typography>
                </Button>
                <Box
                    sx={{
                        display: { marginLeft: '1rem', xs: 'none', md: 'flex' }
                    }}
                >
                    <Button
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        component={Link}
                        to="/basket/"
                    >
                        <ShoppingCartIcon sx={{ marginRight: '.5rem' }} />
                        Cart
                    </Button>
                    {user.user && user.user.roles && user.user.roles.includes('Admin') && (
                        <Button
                            sx={{
                                my: 2,
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            component={Link}
                            to={'/admin/'}
                        >
                            <AddCircleIcon sx={{ marginRight: '.5rem' }} />
                            Admin Panel
                        </Button>
                    )}
                    <Button
                        sx={{
                            my: 2,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        component={Link}
                        to="/orders/"
                    >
                        <CheckCircleIcon sx={{ marginRight: '.5rem' }} />
                        Orders
                    </Button>
                </Box>
                <div style={{ flexGrow: 1 }} />
                <Box sx={{ display: 'flex' }}>
                    {user.user ? (
                        <>
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                onClick={() => dispatch(signOut())}
                            >
                                <LogoutIcon sx={{ marginRight: '.5rem' }} />
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                onClick={() => {
                                    dispatch(setLoginOpen(true));
                                }}
                            >
                                Login
                            </Button>
                            <Button
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                onClick={() => {
                                    dispatch(setRegisterOpen(true));
                                }}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
