import Stack from '@mui/material/Stack/Stack';
import React from 'react';
import Typography from "@mui/material/Typography/Typography";
import { Link } from 'react-router-dom';
import Product from './Product';

export default function ProductList() {
  return <Stack direction="column" sx={{backgroundColor: 'white'}}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ margin: "1rem", backgroundColor: 'white' }}
        alignItems="center"
      >
        <Typography variant="h6">Most Popular Products</Typography>
        <Typography
          sx={{
            fontSize: "1.6rem",
            color: "#41AADE",
            fontWeight: 600,
            textDecoration: "none",
          }}
          component={Link}
          to="/categories/example"
        >
          View All
        </Typography>
      </Stack>
      <div
        style={{
          margin: "0 1.5rem",
          overflowX: "scroll",
          height: "26rem",
          display: "flex",
          width: "100%",
          flexShrink: 0,
          flexGrow: 0,
        }}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
  </Stack>;
}
