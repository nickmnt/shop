import React from 'react';
import SubCategory from './SubCategory';
import Typography from '@mui/material/Typography/Typography';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack/Stack';

export default function Category() {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <Stack direction="row" justifyContent="space-between" sx={{ margin: '1rem' }} alignItems="center">
                <Typography variant="h6">Digital Devices</Typography>
                <Typography
                    sx={{
                        fontSize: '1.6rem',
                        color: '#41AADE',
                        fontWeight: 600,
                        textDecoration: 'none'
                    }}
                    component={Link}
                    to="/categories/example"
                >
                    View All
                </Typography>
            </Stack>
            <div
                style={{
                    margin: '0 1.5rem',
                    overflowX: 'scroll',
                    height: '17.5rem',
                    display: 'flex',
                    width: '100%',
                    flexShrink: 0,
                    flexGrow: 0
                }}
            >
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
                <SubCategory />
            </div>
        </div>
    );
}
