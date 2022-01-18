import React from 'react';
import './App.css';
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PersonIcon from '@mui/icons-material/Person';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Paper from '@mui/material/Paper/Paper';

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div>
      <Paper sx={{position: 'absolute', top: 0, width: '100%', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper sx={{width: '100%', margin: '10rem', backgroundColor: '#eee', height: '95%'}} elevation={0}>

        </Paper>
      </Paper>
      <BottomNavigation
        showLabels
        value={value}
        onChange ={(event, newValue) => {
          setValue(newValue)
        }}
        sx={{width: '100%',height: '3rem',bottom: 0, position: 'absolute'}}
        >
          <BottomNavigationAction label="Home" icon={value !== 0 ? <HomeOutlinedIcon /> : <HomeIcon />} />
          <BottomNavigationAction label="Categories" icon={value !== 1 ? <CategoryOutlinedIcon /> : <CategoryIcon />} />
          <BottomNavigationAction label="Shopping Cart" icon={value !== 2 ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />} />
          <BottomNavigationAction label="My account" icon={value !== 3 ? <PersonOutlineIcon /> : <PersonIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
