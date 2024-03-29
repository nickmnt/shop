import Stack from '@mui/material/Stack/Stack';
import Typography from '@mui/material/Typography/Typography';
import { Link } from 'react-router-dom';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Product } from './app/models/product';
import { GlassCard } from './app/common/GlassCard';
import { Box } from '@mui/material';
import Image from 'mui-image';

export interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const truncate = (str: string, n: number) => {
        return str.length > n ? str.substring(0, n - 1) + '...' : str;
    };

    return (
        <Box component={Link} to={`/catalog/${product.id}`} sx={{ textDecoration: 'none' }}>
            <GlassCard
                sx={{
                    // minWidth: '15rem',
                    // maxHeight: '25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    padding: '1rem'
                }}
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
                    <Image alt={product.name} src={product.pictureUrl} style={{ width: '90%' }} />
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
                    <Typography color="InfoText" sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                        {truncate(product.name, 25)}
                    </Typography>
                    <Stack flexDirection="row" sx={{ margin: '.5rem 0' }}>
                        <InventoryIcon sx={{ color: '#88D1F1', width: '1.6rem', height: '1.6rem' }} />
                        <Typography color="InfoText" sx={{ fontSize: '1rem', marginLeft: '1rem', opacity: 0.75 }}>
                            Available in storage
                        </Typography>
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
            </GlassCard>
        </Box>
    );
}
