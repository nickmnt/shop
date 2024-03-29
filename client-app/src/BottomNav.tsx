import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from 'react-router-dom';

export interface Props {
    value: number;
}

export default function BottomNav({ value }: Props) {
    return (
        <BottomNavigation
            showLabels
            value={value}
            sx={{
                width: '100%',
                height: '5rem',
                bottom: 0,
                position: 'fixed',
                '& .MuiBottomNavigationAction-root, .Mui-selected, svg': {
                    color: '#007A78'
                }
            }}
        >
            <BottomNavigationAction label="Home" component={Link} to="/" icon={value !== 0 ? <HomeOutlinedIcon /> : <HomeIcon />} />
            <BottomNavigationAction label="Products" component={Link} to="/catalog" icon={value !== 1 ? <CategoryOutlinedIcon /> : <CategoryIcon />} />
            <BottomNavigationAction label="Shopping Cart" component={Link} to="/basket" icon={value !== 2 ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />} />
        </BottomNavigation>
    );
}
