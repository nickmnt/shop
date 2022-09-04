import { Box, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CenterContainer from '../../app/common/CenterContainer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BasketSummary from './BasketSummary';
import BasketTable from './BasketTable';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BaseContainer from '../../app/common/BaseContainer';
import { GlassCard } from '../../app/common/GlassCard';
import { toast } from 'react-toastify';
import { setLoginOpen } from '../dialog/dialogSlice';

export default function BasketPage() {
    const { basket } = useAppSelector((state) => state.basket);
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    if (!basket || basket.items.length === 0)
        return (
            <CenterContainer>
                <Box>
                    <GlassCard sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '3rem' }}>
                        <ShoppingBasketIcon sx={{ height: 80, width: 80 }} />
                        <Typography>Your basket is empty</Typography>
                        <Typography>Click here to explore products</Typography>
                        <Button component={Link} variant="contained" fullWidth to={'/catalog'} sx={{ marginTop: '1rem' }}>
                            Back
                        </Button>
                    </GlassCard>
                </Box>
            </CenterContainer>
        );

    return (
        <BaseContainer>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to="/checkout"
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={() => {
                            if (!user) {
                                toast.error('You must login first!');
                                dispatch(setLoginOpen(true));
                            }
                        }}
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </BaseContainer>
    );
}
