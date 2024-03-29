import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import Button from '@mui/material/Button/Button';
import Divider from '@mui/material/Divider/Divider';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableRow from '@mui/material/TableRow/TableRow';
import TextField from '@mui/material/TextField/TextField';
import Typography from '@mui/material/Typography/Typography';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addBasketItemAsync, removeBasketItemAsync } from '../basket/basketSlice';
import { fetchProductAsync, productSelectors } from './catalogSlice';

export default function ProductDetails() {
    const { basket, status } = useAppSelector((state) => state.basket);
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const product = useAppSelector((state) => productSelectors.selectById(state, id!));
    const { status: productStatus } = useAppSelector((state) => state.catalog);
    const [quantity, setQuantity] = useState(0);
    const item = basket?.items.find((i) => i.productId === product?.id);

    useEffect(() => {
        if (item) setQuantity(item.quantity);
        if (!product) dispatch(fetchProductAsync(parseInt(id!)));
    }, [id, item, dispatch, product]);

    function handleInputChange(event: any) {
        if (event.target.value > 0) {
            setQuantity(parseInt(event.target.value));
        }
    }

    function handleUpdateCart() {
        if (!item || quantity > item.quantity) {
            const updatedQuantity = item ? quantity - item.quantity : quantity;
            dispatch(addBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }));
        } else {
            const updatedQuantity = item.quantity - quantity;
            dispatch(removeBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }));
        }
    }

    if (productStatus.includes('pending')) return <div>Loading product...</div>;

    if (!product) return <div>Not Found</div>;

    return (
        <Paper sx={{ margin: '2rem', padding: '2rem' }}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h3" color="textPrimary">
                        {product.name}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="h4" color="secondary">
                        ${(product.price / 100).toFixed(2)}
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>{product.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>{product.brand}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Quantity in stock</TableCell>
                                    <TableCell>{product.quantityInStock}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
                        {product.quantityInStock! > 0 ? (
                            <>
                                <Grid item xs={6}>
                                    <TextField variant="outlined" type="number" label="Quantity in Cart" fullWidth value={quantity} onChange={handleInputChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    {quantity <= product.quantityInStock! ? (
                                        <LoadingButton
                                            disabled={item?.quantity === quantity}
                                            loading={status.includes('pending')}
                                            onClick={handleUpdateCart}
                                            sx={{ height: '55px' }}
                                            color="primary"
                                            size="large"
                                            variant="contained"
                                            fullWidth
                                        >
                                            {item ? 'Update Quantity' : 'Add to Cart'}
                                        </LoadingButton>
                                    ) : (
                                        <Button disabled sx={{ height: '55px' }} color="primary" size="large" variant="contained" fullWidth>
                                            Not enough items in stock
                                        </Button>
                                    )}
                                </Grid>
                            </>
                        ) : (
                            <Button disabled fullWidth color="primary" size="large" variant="contained">
                                Item not in stock
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
