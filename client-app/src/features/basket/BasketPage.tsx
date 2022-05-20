import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CenterContainer from '../../app/common/CenterContainer';
import { useAppSelector } from '../../app/hooks';
import BasketSummary from './BasketSummary';
import BasketTable from './BasketTable';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BaseContainer from '../../app/common/BaseContainer';
import { GlassCard } from '../../app/common/GlassCard';

export default function BasketPage() {
    const { basket } = useAppSelector((state) => state.basket);

    if (!basket)
        return (
            <CenterContainer>
                <Box component={Link} to={'/catalog'}>
                    <GlassCard sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '3rem' }}>
                        <ShoppingBasketIcon sx={{ height: 80, width: 80 }} />
                        <Typography variant="h3">Your basket is empty</Typography>
                        <Typography variant="h3">Click here to explore products</Typography>
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
                    <Button component={Link} to="/checkout" variant="contained" size="large" fullWidth>
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </BaseContainer>
    );
}
