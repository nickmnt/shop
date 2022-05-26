import Button from '@mui/material/Button/Button';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import Grid from '@mui/material/Grid/Grid';
import Hidden from '@mui/material/Hidden/Hidden';
import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography/Typography';
import React, { useState } from 'react';
import AppPagination from '../../app/common/AppPagination';
import BaseContainer from '../../app/common/BaseContainer';
import CenterContainer from '../../app/common/CenterContainer';
import CheckboxButtons from '../../app/common/CheckboxButtons';
import { GlassCard } from '../../app/common/GlassCard';
import RadioButtonGroup from '../../app/common/RadioButtonGroup';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useProducts from '../../app/hooks/useProducts';
import FiltersDialog from '../dialogs/FiltersDialog';
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
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    if (!filtersLoaded || !productsLoaded)
        return (
            <CenterContainer>
                <GlassCard sx={{ padding: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <CircularProgress />
                    <Typography variant="h5" sx={{ marginTop: '1rem' }}>
                        Loading Products...
                    </Typography>
                </GlassCard>
            </CenterContainer>
        );

    return (
        <BaseContainer>
            <Grid container columnSpacing={4}>
                <Hidden mdDown>
                    <Grid item xs={3} md={0}>
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
                </Hidden>
                <Grid item xs={12} md={9} sx={{ marginBottom: '2rem' }}>
                    <ProductList products={products} />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" sx={{ width: '100%' }} onClick={() => setIsFiltersOpen(true)}>
                        FILTERS
                    </Button>
                </Grid>
                <Grid item xs={9} sx={{ mb: 2 }}>
                    {metaData && <AppPagination metaData={metaData} onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))} />}
                </Grid>
            </Grid>
            <FiltersDialog open={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
        </BaseContainer>
    );
}
