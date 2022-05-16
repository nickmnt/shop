import { Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CenterContainer from '../../app/common/CenterContainer';
import { useAppSelector } from '../../app/hooks';
import BasketSummary from './BasketSummary';
import BasketTable from './BasketTable';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BaseContainer from '../../app/common/BaseContainer';

export default function BasketPage() {
    const { basket } = useAppSelector((state) => state.basket);

    if (!basket)
        return (
            <CenterContainer>
                <Paper sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '3rem' }} component={Link} to={'/catalog'}>
                    <ShoppingBasketIcon sx={{ height: 80, width: 80 }} />
                    <Typography variant="h3">Your basket is empty</Typography>
                    <Typography variant="h3">Click here to explore products</Typography>
                </Paper>
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
