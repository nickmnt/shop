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
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

const items = [
    {
        name: 'Random Banner #1',
        description: 'A sample banner!',
        src: './images/banner1.jpg'
    },
    {
        name: 'Random Banner #2',
        description: 'Another sample banner!',
        src: './images/banner2.jpg'
    },
    {
        name: 'Random Banner #3',
        description: 'The final sample banner!',
        src: './images/banner3.jpg'
    }
];

const Item = (props: any) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={props.item.src} alt={props.item.name} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Box>
    );
};

export default function Home() {
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
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                    square
                >
                    <Stack sx={{ width: '100%', height: '100%', justifyContent: 'center' }} direction="column">
                        <Carousel>
                            {items.map((x) => (
                                <Item item={x} />
                            ))}
                        </Carousel>
                        <Stack
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%'
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
