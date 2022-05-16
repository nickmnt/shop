import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import AppPagination from '../../app/common/AppPagination';
import BaseContainer from '../../app/common/BaseContainer';
import CenterContainer from '../../app/common/CenterContainer';
import CheckboxButtons from '../../app/common/CheckboxButtons';
import RadioButtonGroup from '../../app/common/RadioButtonGroup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useProducts from '../../app/hooks/useProducts';
import { setPageNumber, setProductParams } from './catalogSlice';
import ProductList from './ProductList';
import ProductSearch from './ProductSearch';

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price - High to low' },
    { value: 'price', label: 'Price - Low to high' }
];

export default function Catalog() {
    const { products, brands, types, filtersLoaded, productsLoaded, metaData } = useProducts();
    const { productParams } = useAppSelector((state) => state.catalog);
    const dispatch = useAppDispatch();

    if (!filtersLoaded || !productsLoaded)
        return (
            <CenterContainer>
                <CircularProgress />
                <Typography variant="h5" sx={{ marginTop: '1rem' }}>
                    Loading Products...
                </Typography>
            </CenterContainer>
        );

    return (
        <BaseContainer>
            <Grid container columnSpacing={4}>
                <Grid item xs={3}>
                    <Paper sx={{ mb: 2 }}>
                        <ProductSearch />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <RadioButtonGroup selectedValue={productParams.orderBy} options={sortOptions} onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))} />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <CheckboxButtons items={brands} checked={productParams.brands} onChange={(items: string[]) => dispatch(setProductParams({ brands: items }))} />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <CheckboxButtons items={types} checked={productParams.types} onChange={(items: string[]) => dispatch(setProductParams({ types: items }))} />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <ProductList products={products} />
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={9} sx={{ mb: 2 }}>
                    {metaData && <AppPagination metaData={metaData} onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))} />}
                </Grid>
            </Grid>
        </BaseContainer>
    );
}
