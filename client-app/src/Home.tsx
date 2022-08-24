import './App.css';
import Paper from '@mui/material/Paper/Paper';
import Stack from '@mui/material/Stack/Stack';
import RedeemIcon from '@mui/icons-material/Redeem';
import StoreIcon from '@mui/icons-material/Store';
import IconButton from '@mui/material/IconButton/IconButton';
import Typography from '@mui/material/Typography/Typography';
import LaptopIcon from '@mui/icons-material/Laptop';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Grid from '@mui/material/Grid/Grid';
import BottomNav from './BottomNav';
import BaseContainer from './app/common/BaseContainer';
import { Button } from '@mui/material';
import Image from 'mui-image';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';
import { setRegisterOpen } from './features/dialog/dialogSlice';

export default function Home() {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <BaseContainer>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Paper
                    sx={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'center',
                        justifyContent: 'center'
                    }}
                    square
                >
                    <Stack sx={{ width: '100%', height: '100%', justifyContent: 'center' }} direction="column">
                        <div className="welcome">
                            <div className="welcome__left">
                                <p className="welcome__leftTop">
                                    <Typography display="inline" variant="h3" sx={{ fontWeight: 'bold' }}>
                                        Buy the best products from
                                    </Typography>
                                    <Typography display="inline" variant="h3" className="welcome__appTitle" sx={{ display: 'inline', fontWeight: 'bold' }}>
                                        &nbsp;ReactStore
                                    </Typography>
                                </p>
                                <Typography variant="h6">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex neque a cum sunt quidem in minus dignissimos assumenda nulla. Consequuntur necessitatibus a mollitia.
                                    Assumenda quod natus fugit eius numquam et.
                                </Typography>
                                <div className="welcome__leftBottom">
                                    <Button
                                        sx={{ fontSize: '2rem', borderRadius: '20px' }}
                                        variant="contained"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate('./catalog', { replace: true });
                                        }}
                                    >
                                        Products
                                    </Button>
                                    <div style={{ flex: 1 }} />
                                    <Button
                                        sx={{ fontSize: '2rem', borderRadius: '20px' }}
                                        variant="outlined"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dispatch(setRegisterOpen(true));
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </div>
                            <div style={{ flex: 1 }} />
                            <div className="welcome__right">
                                <Image src="https://freepngimg.com/download/apple_iphone/117096-photos-12-iphone-png-file-hd.png" alt="red" />
                            </div>
                        </div>{' '}
                        <Stack
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                m: '7.5rem 0'
                            }}
                            direction="column"
                            spacing={2}
                        >
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 16, md: 16 }} sx={{ width: '100%' }}>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <StoreIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>Market</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4}>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <LaptopIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>Digital</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <AssignmentIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>Missions</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <RedeemIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>Big Gift</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <CheckroomIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>Clothes</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <LaptopIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>ABCD</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #eb3349, #ee3f47, #f04946, #f25344, #f45c43)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <AssignmentIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>ABCD</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={2} sm={4} md={4} zeroMinWidth>
                                    <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <IconButton
                                            sx={{
                                                backgroundImage: 'linear-gradient(to top, #4ca1af, #6db1bc, #8bc0ca, #a8d0d7, #c4e0e5)',
                                                width: 48,
                                                height: 48
                                            }}
                                        >
                                            <MoreHorizIcon sx={{ color: '#FFFAFA' }} />
                                        </IconButton>
                                        <Typography>More</Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                </Paper>
                <BottomNav value={0} />
            </div>
        </BaseContainer>
    );
}
