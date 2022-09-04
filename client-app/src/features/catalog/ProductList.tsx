import Grid from '@mui/material/Grid/Grid';
import React from 'react';
import { GrowList } from '../../app/common/GrowList';
import { useAppSelector } from '../../app/hooks';
import { Product } from '../../app/models/product';
import ProductCard from '../../Product';

export interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    const { productsLoaded } = useAppSelector((state) => state.catalog);

    return (
        <Grid container spacing={{ xs: 1, sm: 2, md: 4 }}>
            <GrowList>
                {products.map((product) => (
                    <Grid item xs={4} key={product.id}>
                        {!productsLoaded ? <div>Product</div> : <ProductCard product={product} />}
                    </Grid>
                ))}
            </GrowList>
        </Grid>
    );
}
