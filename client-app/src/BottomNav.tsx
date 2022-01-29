import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PersonIcon from "@mui/icons-material/Person";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from "react-router-dom";

export interface Props {
  value: number;
}

export default function BottomNav({ value }: Props) {
  return (
    <BottomNavigation
      showLabels
      value={value}
      sx={{ width: "100%", height: "5rem", bottom: 0, position: "fixed" }}
    >
      <BottomNavigationAction
        label="Home"
        component={Link}
        to="/"
        icon={value !== 0 ? <HomeOutlinedIcon /> : <HomeIcon />}
      />
      <BottomNavigationAction
        label="Categories"
        component={Link}
        to="/categories"
        icon={value !== 1 ? <CategoryOutlinedIcon /> : <CategoryIcon />}
      />
      <BottomNavigationAction
        label="Shopping Cart"
        component={Link}
        to="/cart"
        icon={value !== 2 ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="My account"
        component={Link}
        to="/account"
        icon={value !== 3 ? <PersonOutlineIcon /> : <PersonIcon />}
      />
    </BottomNavigation>
  );
}
