import Dialog from '@mui/material/Dialog/Dialog';
import Paper from '@mui/material/Paper/Paper';
import Grid from '@mui/material/Grid/Grid';
import ProductSearch from '../catalog/ProductSearch';
import RadioButtonGroup from '../../app/common/RadioButtonGroup';
import CheckboxButtons from '../../app/common/CheckboxButtons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useProducts from '../../app/hooks/useProducts';
import { setProductParams } from '../catalog/catalogSlice';
import IconButton from '@mui/material/IconButton/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button/Button';

const sortOptions = [
    { value: 'name', label: 'Alphabetical' },
    { value: 'priceDesc', label: 'Price - High to low' },
    { value: 'price', label: 'Price - Low to high' }
];

export interface Props {
    open: boolean;
    onClose: () => void;
}

export default function FiltersDialog({ open, onClose }: Props) {
    const { brands, types } = useProducts();
    const { productParams } = useAppSelector((state) => state.catalog);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open} fullScreen>
            <Paper>
                <Grid container sx={{ padding: '2rem' }}>
                    <Grid item xs={12}>
                        <Grid container sx={{ mb: 2 }} columnSpacing={2}>
                            <Grid item xs={10.5} sm={11}>
                                <Paper sx={{ width: '100%' }}>
                                    <ProductSearch />
                                </Paper>
                            </Grid>
                            <Grid item xs={1.5} sm={1} display="flex" alignItems="center" justifyContent="center">
                                <IconButton onClick={onClose} color="primary" size="large">
                                    <CloseIcon sx={{ width: 36, height: 36 }} />
                                </IconButton>
                            </Grid>
                        </Grid>
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
                </Grid>
            </Paper>
        </Dialog>
    );
}
