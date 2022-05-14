import Paper from '@mui/material/Paper/Paper';
import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Product } from './app/models/product';

export interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const truncate = (str: string, n: number) => {
        return str.length > n ? str.substring(0, n - 1) + '...' : str;
    };

    return (
        <Paper
            square
            sx={{
                // minWidth: '15rem',
                // maxHeight: '25rem',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                padding: '1rem',
                textDecoration: 'none'
            }}
            component={Link}
            to={`/catalog/${product.id}`}
        >
            <div
                style={{
                    height: '60%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img alt="laptop" src="../images/sample-product-1.png" style={{ width: '90%' }} />
            </div>
            <div
                style={{
                    width: '100%',
                    height: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography sx={{ fontSize: '1.3rem', color: '#8e8e8e', fontWeight: 500 }}>{truncate(product.name, 25)}</Typography>
                <Stack flexDirection="row" sx={{ margin: '.5rem 0' }}>
                    <InventoryIcon sx={{ color: '#88D1F1', width: '1.6rem', height: '1.6rem' }} />
                    <Typography sx={{ fontSize: '1rem', color: '#9c9c9c', marginLeft: '1rem' }}>Available in storage</Typography>
                </Stack>
                <Stack flexDirection="row" sx={{ margin: '.5rem 0', width: '100%' }} alignItems="center" justifyContent="space-between">
                    <Typography
                        sx={{
                            fontSize: '1rem',
                            color: 'white',
                            marginLeft: '1rem',
                            backgroundColor: 'red',
                            borderRadius: '2rem',
                            padding: '.5rem',
                            fontWeight: 500
                        }}
                    >
                        40 %
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', color: '#363636', fontWeight: 600 }}>{product.price} $</Typography>
                </Stack>
                {/* <Stack flexDirection="row" sx={{ width: '100%', marginBottom: '3rem' }} alignItems="center" justifyContent="end"> */}
                {/* <Typography sx={{ fontSize: '1rem', color: '#9c9c9c', fontWeight: 600, textDecoration: 'line-through' }}>3333 $</Typography> */}
                {/* </Stack> */}
            </div>
        </Paper>
    );
}
